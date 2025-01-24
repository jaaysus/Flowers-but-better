import React, { useEffect } from "react";
import "../styles/panierflower.css";

const PanierFlower = () => {
  useEffect(() => {
    const updateEyes = (e) => {
      const eyes = document.querySelectorAll(".flower__eye span");

      eyes.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const offsetX = Math.cos(angle) * 5;
        const offsetY = Math.sin(angle) * 5;

        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    document.addEventListener("mousemove", updateEyes);

    return () => {
      document.removeEventListener("mousemove", updateEyes);
    };
  }, []);

  return (
    <div className="panier-flower">
      <div className="flower">
        <div className="flower__head">
          <div className="flower__eye left">
            <span></span>
          </div>
          <div className="flower__nose"></div>
          <div className="flower__eye right">
            <span></span>
          </div>
        </div>

        <div className="flower__leaf"></div>
        <div className="flower__leaf--shadow"></div>
        <div className="flower__leaf oposite"></div>
        <div className="flower__leaf--shadow oposite"></div>

        <div className="flower__stem"></div>

        <div className="flower__pot">
          <div className="flower__pot--shadow"></div>
          <div className="flower__pot--bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default PanierFlower;
