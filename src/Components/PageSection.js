import React, { forwardRef } from "react";
import ImagePreview from "./QuadImagePreview";

const PageSection = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={"padding-top-xxxl " + className}
      style={{ minHeight: "700px", height: "100vh" }}
    >
      {children}
    </div>
  );
});

export default PageSection;
