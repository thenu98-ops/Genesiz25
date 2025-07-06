import React, { useEffect, useRef } from 'react';
const BubbleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Updated colors to match the image exactly
    const colors = ['#ff00e6', '#00d8ff', '#9d4edd', '#7209b7'];
    class Bubble {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Only small particles (1-4 pixels)
        this.size = Math.random() * 3 + 1;
        // Maintain the faster speed from previous update
        this.speedX = (Math.random() * 5 - 2.5) * 1.5;
        this.speedY = (Math.random() * 5 - 2.5) * 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Wrap around screen edges
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Small glow effect for small particles
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    // Increased number of particles since they're smaller now
    const bubbles: Bubble[] = [];
    for (let i = 0; i < 120; i++) {
      bubbles.push(new Bubble());
    }
    const animate = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(13, 6, 32, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      requestAnimationFrame(animate);
    };
    // Set initial background
    ctx.fillStyle = '#0d0620';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reset background on resize
      ctx.fillStyle = '#0d0620';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full bg-[#0d0620]" />;
};
export default BubbleBackground;