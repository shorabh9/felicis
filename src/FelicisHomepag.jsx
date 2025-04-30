import { useState, useEffect, useRef } from 'react';

const AnimatedBallsAndLines = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { offsetWidth, offsetHeight } = canvasRef.current.parentElement;
        setDimensions({
          width: offsetWidth,
          height: offsetHeight
        });
      }
    };

    // Initial update
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Configure balls
    const balls = [
      {
        x: dimensions.width * 0.3,
        y: dimensions.height * 0.4,
        radius: dimensions.width < 768 ? 15 : 30,
        color: '#0011FF',
        velocityX: 0.5,
        velocityY: 0.3,
        pathRadius: dimensions.width < 768 ? 60 : 120,
        angle: 0,
        centerX: dimensions.width * 0.3,
        centerY: dimensions.height * 0.4,
      },
      {
        x: dimensions.width * 0.3,
        y: dimensions.height * 0.6,
        radius: dimensions.width < 768 ? 15 : 30,
        color: '#000066',
        velocityX: -0.3,
        velocityY: 0.4,
        pathRadius: dimensions.width < 768 ? 50 : 100,
        angle: Math.PI,
        centerX: dimensions.width * 0.3,
        centerY: dimensions.height * 0.6,
      },
      {
        x: dimensions.width * 0.5,
        y: dimensions.height * 0.5,
        radius: dimensions.width < 768 ? 10 : 20,
        color: '#5555FF',
        velocityX: 0.4,
        velocityY: -0.2,
        pathRadius: dimensions.width < 768 ? 40 : 80,
        angle: Math.PI / 2,
        centerX: dimensions.width * 0.5,
        centerY: dimensions.height * 0.5,
      }
    ];

    // Paths for background
    const paths = [
      {
        // Outer path
        draw: () => {
          const pathWidth = dimensions.width * 0.5;
          const pathHeight = dimensions.height * 0.7;
          const startX = dimensions.width * 0.1;
          const startY = dimensions.height * 0.2;
          
          ctx.beginPath();
          ctx.moveTo(startX, startY + pathHeight);
          ctx.lineTo(startX, startY);
          ctx.bezierCurveTo(
            startX, startY - pathHeight * 0.2,
            startX + pathWidth, startY - pathHeight * 0.2,
            startX + pathWidth, startY
          );
          ctx.bezierCurveTo(
            startX + pathWidth, startY + pathHeight * 0.2,
            startX + pathWidth * 0.7, startY + pathHeight * 1.2,
            startX, startY + pathHeight
          );
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      },
      {
        // Inner path
        draw: () => {
          const pathWidth = dimensions.width * 0.35;
          const pathHeight = dimensions.height * 0.5;
          const startX = dimensions.width * 0.15;
          const startY = dimensions.height * 0.3;
          
          ctx.beginPath();
          ctx.moveTo(startX, startY + pathHeight);
          ctx.lineTo(startX, startY);
          ctx.bezierCurveTo(
            startX, startY - pathHeight * 0.2,
            startX + pathWidth, startY - pathHeight * 0.2,
            startX + pathWidth, startY
          );
          ctx.bezierCurveTo(
            startX + pathWidth, startY + pathHeight * 0.2,
            startX + pathWidth * 0.7, startY + pathHeight * 1.2,
            startX, startY + pathHeight
          );
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    ];

    // Animation function
    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw paths
      paths.forEach(path => path.draw());
      
      // Update and draw balls
      balls.forEach(ball => {
        // Update angle and position
        ball.angle += 0.01;
        ball.x = ball.centerX + Math.cos(ball.angle) * ball.pathRadius;
        ball.y = ball.centerY + Math.sin(ball.angle) * ball.pathRadius;
        
        // Draw ball
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
      });
      
      // Draw connections between balls
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const b1 = balls[i];
          const b2 = balls[j];
          
          ctx.beginPath();
          ctx.moveTo(b1.x, b1.y);
          ctx.lineTo(b2.x, b2.y);
          ctx.strokeStyle = 'rgba(100, 100, 255, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 md:opacity-100">
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
};

// Main component that includes the animation and the content
export default function JungleVenturesHero() {
  return (
    <div className="w-full min-h-screen bg-white text-black relative overflow-hidden">
      {/* Header */}
      <header className="w-full p-4 md:p-6 flex justify-between items-center z-10 relative">
        <div className="text-2xl md:text-3xl font-bold">JUNGLE</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:opacity-70">Portfolio</a>
          <a href="#" className="hover:opacity-70">Team</a>
          <a href="#" className="hover:opacity-70">Resources</a>
          <a href="#" className="hover:opacity-70">First Cheque</a>
        </div>
        <button className="bg-transparent border-2 border-black rounded-full px-4 py-2 hidden md:block">
          Get in touch
          <span className="ml-2">→</span>
        </button>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      
      {/* Main content */}
      <div className="w-full flex flex-col-reverse md:flex-row h-[70vh] md:h-[80vh] relative">
        {/* Animation */}
        <div className="w-full md:w-1/2 h-full relative">
          <div className="w-full h-full absolute top-0 left-0">
            <AnimatedBallsAndLines />
          </div>
        </div>
        
        {/* Text content */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Build to last.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Idea to IPO partners for the most exceptional founders in India and Southeast Asia.
          </p>
          <button className="bg-blue-900 text-white rounded-full px-6 py-3 w-fit">
            Sign up for updates
          </button>
        </div>
      </div>
    </div>
  );
}