import React, { forwardRef } from "react";

const PageSection = forwardRef(({ children, style, className = "" }, ref) => {
  return (
    <div ref={ref} className={"padding-top-xxxl " + className} style={style}>
      {children}
    </div>
  );
});

export default PageSection;
