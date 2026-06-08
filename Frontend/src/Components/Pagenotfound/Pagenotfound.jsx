import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Pagenotfound.css";

const Pagenotfound = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 50;
    let y = 50;
    let dx = 2;
    let dy = 2;
    const radius = 10;

    const drawBall = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#0f3d5e";
      ctx.fill();
      ctx.closePath();

      if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
      }

      x += dx;
      y += dy;
    };

    const interval = setInterval(drawBall, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pagenotfound-wrapper">
      <div className="pagenotfound-container">

        <h1 className="error-code">🚧</h1>

        <h2 className="error-title">
          We’re Working On This Page
        </h2>

        <p className="error-text">
          This section is currently under development.  
          Our team is building something amazing for you.
        </p>

        <div className="mini-game">
          <p className="game-text">While you wait, enjoy this mini animation 😊</p>
          <canvas ref={canvasRef} width="300" height="120"></canvas>
        </div>

        <Link to="/" className="home-btn">
          Back to Home →
        </Link>

      </div>
    </div>
  );
};

export default Pagenotfound;