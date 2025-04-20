import React from "react";
import "./styles.css";

interface BlurBgProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const BlurBg: React.FC<BlurBgProps> = ({ top, left, right, bottom }) => {
  return (
    <div className={`blue__blur-wrapper ${top} ${left} ${right} ${bottom}`}>
      <div className="blue__blur-inner"></div>
    </div>
  );
};

export default BlurBg;
