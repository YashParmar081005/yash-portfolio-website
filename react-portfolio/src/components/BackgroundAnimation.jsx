import { useEffect, useRef } from 'react';

export default function BackgroundAnimation({ theme }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const particlesArray = [];
        const numberOfParticles = 80;

        // Base colors for theme
        const colors = theme === 'dark' ? ['#00d4ff', '#7c3aed', '#06b6d4'] : ['#0096c8', '#8b5cf6', '#0ea5e9'];

        let mouse = {
            x: null,
            y: null,
            radius: 120
        };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.speedX = (Math.random() * 2 - 1) * 0.5;
                this.speedY = (Math.random() * 2 - 1) * 0.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            update() {
                // Natural movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;

                // Mouse interaction
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * this.density;
                        const directionY = forceDirectionY * force * this.density;

                        // Push particles away
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.6;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                    // Check distance to mouse as well to light up connections near mouse
                    let distToMouse = 999999;
                    if (mouse.x != null && mouse.y != null) {
                        let dx = mouse.x - particlesArray[a].x;
                        let dy = mouse.y - particlesArray[a].y;
                        distToMouse = Math.sqrt(dx * dx + dy * dy);
                    }

                    if (distance < (canvas.width / 10) * (canvas.height / 10)) {
                        opacityValue = 1 - (distance / 20000);

                        // Make connections near mouse brighter
                        const connectAlpha = distToMouse < mouse.radius * 1.5 ? opacityValue * 0.5 : opacityValue * 0.15;

                        ctx.strokeStyle = `rgba(0, 212, 255, ${connectAlpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-80"></canvas>;
}
