import React from "react";

export const FullSizeIframe = ({ src }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src={src}
        title="Full Size Iframe"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};
