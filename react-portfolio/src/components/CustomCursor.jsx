import { useEffect, useState } from 'react';

export default function CustomCursor({ theme }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        }
    }, []);

    return (
        <div className="hidden md:block">
            <div
                id="cursor"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`
                }}
            ></div>
            <div
                id="cursor-ring"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: isHovering ? '55px' : '38px',
                    height: isHovering ? '55px' : '38px',
                    transform: 'translate(-50%, -50%)'
                }}
            ></div>
        </div>
    );
}
