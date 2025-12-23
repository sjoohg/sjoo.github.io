import React, { useState, useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const COLOR_PALETTE = [
    { name: 'Dark', hex: '#111827' },
    { name: 'Gray', hex: '#6b7280' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Red', hex: '#ef4444' },
    { name: 'Orange', hex: '#f97316' },
    { name: 'Yellow', hex: '#eab308' },
    { name: 'Green', hex: '#22c55e' },
    { name: 'Blue', hex: '#3b82f6' },
];

export default function App() {
    const mountRef = useRef(null);
    const svgRef = useRef(null);
    
    // State management
    const [h, setH] = useState(1);
    const [k, setK] = useState(1);
    const [l, setL] = useState(1);
    const [offset, setOffset] = useState(0);
    const [opacity, setOpacity] = useState(0.5);
    const [showBonds, setShowBonds] = useState(true);
    const [showGrid, setShowGrid] = useState(true);
    const [showAxis, setShowAxis] = useState(true);
    const [show2D, setShow2D] = useState(true);
    const [showBelowOnly, setShowBelowOnly] = useState(false);
    const [structureSize, setStructureSize] = useState(4); // 4x4x4
    const [atomSize, setAtomSize] = useState(5); // Atom radius
    const [showPanel, setShowPanel] = useState(true); // Panel toggle
    
    // Toast message state for Android UX
    const [toastMessage, setToastMessage] = useState(null);

    // Color settings state
    const [bgColor, setBgColor] = useState(COLOR_PALETTE[0].hex); // Default: Dark
    const [atomColor, setAtomColor] = useState(COLOR_PALETTE[2].hex); // Default: White
    const [bondColor, setBondColor] = useState(COLOR_PALETTE[1].hex); // Default: Gray
    const [planeColor, setPlaneColor] = useState(COLOR_PALETTE[7].hex); // Default: Blue
    
    // Color picker UI state
    const [activeColorPicker, setActiveColorPicker] = useState(null);

    // 2D Window drag state
    const [windowPos, setWindowPos] = useState({ x: 20, y: 20 });
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    // Three.js object refs
    const sceneRef = useRef(null);
    const planeMeshRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const gridHelperRef = useRef(null); 
    const axesHelperRef = useRef(null); 
    const frameIdRef = useRef(null); 

    // --- Toast Message Logic ---
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    // --- Image Saving Logic ---
    const handleSave3D = () => {
        if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
        const renderer = rendererRef.current;
        renderer.render(sceneRef.current, cameraRef.current);
        const link = document.createElement('a');
        link.download = `diamond_structure_3d_${h}${k}${l}.png`;
        link.href = renderer.domElement.toDataURL('image/png');
        link.click();
        setToastMessage("3D Image saved! 📸");
    };

    const handleSave2D = () => {
        if (!svgRef.current) return;
        const svgData = new XMLSerializer().serializeToString(svgRef.current);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        const width = 800;
        const height = 800;
        canvas.width = width;
        canvas.height = height;
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        img.onload = () => {
            // Use current background color for saving
            ctx.fillStyle = bgColor; 
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            const link = document.createElement('a');
            link.download = `diamond_section_2d_${h}${k}${l}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            URL.revokeObjectURL(url);
            setToastMessage("2D Section saved! 📸");
        };
        img.src = url;
    };

    // --- Dragging Logic (Mouse & Touch) ---
    const startDrag = (clientX, clientY) => {
        setIsDragging(true);
        dragOffset.current = {
            x: clientX - windowPos.x,
            y: clientY - windowPos.y
        };
    };

    const handleMouseDown = (e) => {
        if (e.target.closest('button')) return;
        startDrag(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
        if (e.target.closest('button')) return;
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            setWindowPos({
                x: e.clientX - dragOffset.current.x,
                y: e.clientY - dragOffset.current.y
            });
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            setWindowPos({
                x: touch.clientX - dragOffset.current.x,
                y: touch.clientY - dragOffset.current.y
            });
        };

        const handleEndDrag = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEndDrag);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleEndDrag);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEndDrag);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEndDrag);
        };
    }, [isDragging]);

    // --- Data Generation (Memoized) ---
    const diamondData = useMemo(() => {
        const atoms = [];
        const latticeConstant = 40; 
        const basis = [
            [0, 0, 0], [0.5, 0.5, 0], [0.5, 0, 0.5], [0, 0.5, 0.5],
            [0.25, 0.25, 0.25], [0.75, 0.75, 0.25], [0.75, 0.25, 0.75], [0.25, 0.75, 0.75]
        ];
        for (let x = 0; x < structureSize; x++) {
            for (let y = 0; y < structureSize; y++) {
                for (let z = 0; z < structureSize; z++) {
                    basis.forEach(b => {
                        atoms.push({
                            x: (x + b[0]) * latticeConstant,
                            y: (y + b[1]) * latticeConstant,
                            z: (z + b[2]) * latticeConstant
                        });
                    });
                }
            }
        }
        const centerVal = (structureSize * latticeConstant) / 2;
        const center = new THREE.Vector3(centerVal, centerVal, centerVal);
        return { atoms, center, latticeConstant };
    }, [structureSize]);

    // --- Coordinate System Calculation (Memoized) ---
    const planeBasis = useMemo(() => {
        if (h === 0 && k === 0 && l === 0) return null;
        const normalRaw = new THREE.Vector3(h, k, l);
        const normal = normalRaw.clone().normalize(); 
        let up = new THREE.Vector3(0, 1, 0);
        if (Math.abs(normal.dot(up)) > 0.99) up.set(1, 0, 0);
        const uRaw = new THREE.Vector3().crossVectors(up, normalRaw);
        const vRaw = new THREE.Vector3().crossVectors(normalRaw, uRaw);
        const diagRaw = new THREE.Vector3().addVectors(uRaw, vRaw);
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const gcd3 = (x, y, z) => gcd(Math.abs(x), gcd(Math.abs(y), Math.abs(z)));
        const formatVec = (v) => {
            const div = gcd3(Math.round(v.x), Math.round(v.y), Math.round(v.z)) || 1;
            return `[${Math.round(v.x/div)} ${Math.round(v.y/div)} ${Math.round(v.z/div)}]`;
        };
        return {
            uDir: uRaw.clone().normalize(),
            vDir: vRaw.clone().normalize(),
            uLabel: formatVec(uRaw),
            vLabel: formatVec(vRaw),
            diagLabel: formatVec(diagRaw)
        };
    }, [h, k, l]);

    // --- 2D Projection Logic (Updated for Dynamic Cross-Section) ---
    const atoms2D = useMemo(() => {
        if (!planeBasis) return [];
        const { uDir, vDir } = planeBasis;
        const normal = new THREE.Vector3(h, k, l).normalize();
        const planeOrigin = diamondData.center.clone().add(normal.clone().multiplyScalar(offset * 10));
        const projected = [];
        
        // 1. Threshold matches atom radius exactly
        const threshold = atomSize; 

        diamondData.atoms.forEach(atom => {
            const pos = new THREE.Vector3(atom.x, atom.y, atom.z);
            const vecToAtom = new THREE.Vector3().subVectors(pos, planeOrigin);
            
            // Perpendicular distance d to the plane
            const dist = vecToAtom.dot(normal);

            // 2. Check intersection (|d| < R)
            if (Math.abs(dist) < threshold) {
                const u = vecToAtom.dot(uDir);
                const v = vecToAtom.dot(vDir);
                
                // 3. Calculate cross-section radius: r_2d = sqrt(R^2 - d^2)
                const sectionRadius = Math.sqrt(Math.pow(atomSize, 2) - Math.pow(dist, 2));
                
                // 4. Calculate opacity: linear interpolation from center (0.9) to edge (0.5)
                // Ratio: 1 at center, 0 at edge
                const ratio = sectionRadius / atomSize;
                const opacity = 0.5 + (0.4 * ratio); 

                projected.push({ 
                    u, 
                    v, 
                    r: sectionRadius, // Calculated radius
                    opacity: opacity, // Calculated opacity
                    id: `${atom.x}-${atom.y}-${atom.z}` 
                });
            }
        });
        return projected;
    }, [h, k, l, offset, diamondData, planeBasis, atomSize]); 

    // --- 3D Scene Initialization & Update ---
    useEffect(() => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(bgColor); // Initial background color
        sceneRef.current = scene;
        const camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000);
        camera.position.set(300, 300, 400);
        cameraRef.current = camera;
        
        // Android optimization: Limit pixelRatio to 2 to prevent performance issues on high-res devices
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        // Explicit touch gesture settings
        controls.touches = {
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN
        };
        controlsRef.current = controls;
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(100, 200, 100);
        scene.add(dirLight);
        const dirLight2 = new THREE.DirectionalLight(0xffccaa, 0.5);
        dirLight2.position.set(-100, -200, -100);
        scene.add(dirLight2);
        
        // Helpers
        const maxGridSize = 300; 
        const gridHelper = new THREE.GridHelper(maxGridSize, 10, 0x444444, 0x222222);
        gridHelper.position.set(maxGridSize/2, 0, maxGridSize/2);
        scene.add(gridHelper);
        gridHelperRef.current = gridHelper; 

        const axesHelper = new THREE.AxesHelper(60);
        scene.add(axesHelper);
        axesHelperRef.current = axesHelper; 

        const planeGeom = new THREE.PlaneGeometry(800, 800);
        const planeMat = new THREE.MeshPhongMaterial({ 
            color: planeColor, 
            side: THREE.DoubleSide, 
            transparent: true, 
            opacity: 0.5, 
            depthWrite: false, 
            shininess: 90
        });
        const planeMesh = new THREE.Mesh(planeGeom, planeMat);
        scene.add(planeMesh);
        planeMeshRef.current = planeMesh;
        const animate = () => {
            frameIdRef.current = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameIdRef.current);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    // 3D Scene Background Update
    useEffect(() => {
        if (sceneRef.current) {
            sceneRef.current.background = new THREE.Color(bgColor);
        }
    }, [bgColor]);

    // 3D Grid/Axis Visibility Update
    useEffect(() => {
        if (gridHelperRef.current) {
            gridHelperRef.current.visible = showGrid;
        }
        if (axesHelperRef.current) {
            axesHelperRef.current.visible = showAxis;
        }
    }, [showGrid, showAxis]);

    // Update Structure (Atoms & Bonds) with Filter Logic
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;
        const objectsToRemove = scene.children.filter(c => c.name === 'atoms' || c.name === 'bonds');
        objectsToRemove.forEach(obj => scene.remove(obj));
        const { atoms } = diamondData;

        // --- Filtering Logic for Show Below Only (Modified) ---
        const normal = new THREE.Vector3(h, k, l).normalize();
        const planeOrigin = diamondData.center.clone().add(normal.clone().multiplyScalar(offset * 10));
        
        let visibleAtoms = atoms;

        // Helper to check if a point is visible
        const isVisible = (point) => {
            if (!showBelowOnly) return true;
            if (h === 0 && k === 0 && l === 0) return true; 
            
            const vec = new THREE.Vector3().subVectors(point, planeOrigin);
            // Normal direction is +, opposite is -
            // Below Only: Always show if below.
            // Even if above (positive), show if distance is within radius (intersecting).
            // i.e., dot <= atomSize
            return vec.dot(normal) <= atomSize;
        };

        if (showBelowOnly && (h !== 0 || k !== 0 || l !== 0)) {
            visibleAtoms = atoms.filter(atom => {
                return isVisible(new THREE.Vector3(atom.x, atom.y, atom.z));
            });
        }
        
        // Atom Rendering (No clipping, full sphere)
        if (visibleAtoms.length > 0) {
            const atomGeo = new THREE.SphereGeometry(atomSize, 16, 16); 
            const atomMat = new THREE.MeshPhongMaterial({ 
                color: atomColor, 
                shininess: 50
            });
            const atomMesh = new THREE.InstancedMesh(atomGeo, atomMat, visibleAtoms.length);
            atomMesh.name = 'atoms';
            const dummy = new THREE.Object3D();
            visibleAtoms.forEach((atom, i) => {
                dummy.position.set(atom.x, atom.y, atom.z);
                dummy.updateMatrix();
                atomMesh.setMatrixAt(i, dummy.matrix);
            });
            atomMesh.instanceMatrix.needsUpdate = true;
            scene.add(atomMesh);
        }
        
        // Bond Rendering (No clipping)
        if (showBonds) {
            const bonds = [];
            // Find bonds for all atoms
            for (let i = 0; i < atoms.length; i++) {
                for (let j = i + 1; j < atoms.length; j++) {
                    const p1 = new THREE.Vector3(atoms[i].x, atoms[i].y, atoms[i].z);
                    const p2 = new THREE.Vector3(atoms[j].x, atoms[j].y, atoms[j].z);
                    
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dz = p1.z - p2.z;
                    const distSq = dx*dx + dy*dy + dz*dz;
                    
                    if (distSq > 290 && distSq < 310) {
                        // Show bond only if both atoms are visible
                        if (isVisible(p1) && isVisible(p2)) {
                            bonds.push({ start: p1, end: p2 });
                        }
                    }
                }
            }

            if (bonds.length > 0) {
                const bondGeo = new THREE.CylinderGeometry(1.5, 1.5, 1, 8);
                // Apply Bond Color
                const bondMat = new THREE.MeshPhongMaterial({ 
                    color: bondColor
                });
                const bondMesh = new THREE.InstancedMesh(bondGeo, bondMat, bonds.length);
                bondMesh.name = 'bonds';
                const bondDummy = new THREE.Object3D();
                const axis = new THREE.Vector3();
                const up = new THREE.Vector3(0, 1, 0);
                bonds.forEach((bond, idx) => {
                    const start = bond.start;
                    const end = bond.end;
                    const dist = start.distanceTo(end);
                    const mid = start.clone().add(end).multiplyScalar(0.5);
                    bondDummy.position.copy(mid);
                    bondDummy.scale.set(1, dist, 1);
                    axis.subVectors(end, start).normalize();
                    bondDummy.quaternion.setFromUnitVectors(up, axis);
                    bondDummy.updateMatrix();
                    bondMesh.setMatrixAt(idx, bondDummy.matrix);
                });
                bondMesh.instanceMatrix.needsUpdate = true;
                scene.add(bondMesh);
            }
        }
    }, [diamondData, showBonds, atomColor, bondColor, atomSize, showBelowOnly, h, k, l, offset]); 

    // Update Plane
    useEffect(() => {
        if (!planeMeshRef.current) return;
        const plane = planeMeshRef.current;
        if (h === 0 && k === 0 && l === 0) {
            plane.visible = false;
            return;
        }
        plane.visible = true;
        const normal = new THREE.Vector3(h, k, l).normalize();
        const initialNormal = new THREE.Vector3(0, 0, 1);
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(initialNormal, normal);
        plane.quaternion.copy(quaternion);
        const pos = diamondData.center.clone().add(normal.multiplyScalar(offset * 10));
        plane.position.copy(pos);
        plane.material.opacity = opacity;
        plane.material.color.set(planeColor); // Update Plane Color
    }, [h, k, l, offset, opacity, planeColor, diamondData.center]);

    return (
        <div className="relative w-full h-screen flex flex-col md:flex-row bg-gray-900 text-white overflow-hidden">
            <style>{`...`}</style>
            <div className="relative flex-grow h-full" style={{ touchAction: 'none' }}>
                <div ref={mountRef} className="w-full h-full cursor-move" />
            </div>
        </div>
    );
}
