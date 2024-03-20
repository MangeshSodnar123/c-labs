import React from "react";


export default function ColoredDot({ color, size }) {
    return (
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
          }}
        ></div>
      );
}