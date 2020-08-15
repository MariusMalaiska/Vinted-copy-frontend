import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

function Button({
  children,
  color,
  onClick,
  mode,
  size,
  type,
  className = ``,
  ...props
}) {
  const Tag = props.to ? Link : props.href ? "a" : "button";
  let classes = "Button";
  const colorClass = {
    green: "Button--green",
    none: "Button--none",
    transparent: "Button--transparent"
  }[color];
  const sizeClass = {
    min: "Button--min--content",
    spacing: "Vertical-spacing"
  }[size];
  let modeClass = mode === "outline" ? "Button--outline Button " : "Button";

  return (
    <Tag
      className={`${modeClass} ${colorClass} ${classes} ${sizeClass} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Button;
