import React from 'react';

const StaticBlackBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[-10] pointer-events-none" />
  );
};

export default StaticBlackBackground;




// import React, { useEffect, useRef } from 'react';

// const MatrixBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     const fontSize = 14;
//     const columns = Math.floor(width / fontSize);
//     const drops: number[] = Array(columns).fill(1);
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%';
//     const color = '#00d8ff';

//     let zoomed = false;

//     const draw = () => {
//       if (zoomed) {
//         ctx.fillStyle = '#0d0620';
//         ctx.fillRect(0, 0, width, height);
//         return;
//       }

//       ctx.fillStyle = 'rgba(13,6,32,0.1)';
//       ctx.fillRect(0, 0, width, height);
//       ctx.fillStyle = color;
//       ctx.font = fontSize + 'px monospace';

//       drops.forEach((y, i) => {
//         const text = chars.charAt(Math.floor(Math.random() * chars.length));
//         const x = i * fontSize;
//         ctx.fillText(text, x, y * fontSize);

//         if (y * fontSize > height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
//         drops[i]++;
//       });
//     };

//     const loop = () => {
//       draw();
//       requestAnimationFrame(loop);
//     };

//     loop();

//     const onZoom = () => {
//       // You could refine threshold detection via event.deltaY or gesture detection
//       zoomed = true;
//       setTimeout(() => { zoomed = false }, 500); // reset after pinch ends
//     };

//     window.addEventListener('wheel', onZoom, { passive: true });
//     window.addEventListener('gesturestart', onZoom as any);
//     window.addEventListener('resize', () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     });

//     return () => {
//       window.removeEventListener('wheel', onZoom);
//       window.removeEventListener('gesturestart', onZoom as any);
//       window.removeEventListener('resize', () => {});
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
//     />
//   );
// };

// export default MatrixBackground;


