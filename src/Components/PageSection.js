import React, { forwardRef } from "react";
import ImagePreview from "./QuadImagePreview";

const PageSection = forwardRef(({ children, style, className = "" }, ref) => {
  return (
    <div ref={ref} className={"padding-top-xxxl " + className} style={style}>
      {children}
    </div>
  );
});

export default PageSection;
