import React from "react";

export default function TextInput({ label, placeholder, ismultiline = false }) {
  return (
    <div className="display-flex flex-direction-column gap-s">
      <label>{label}</label>
      {ismultiline && (
        <textarea rows={10} style={{ width: "350px" }}></textarea>
      )}
      {!ismultiline && <input placeholder={placeholder}></input>}
    </div>
  );
}
