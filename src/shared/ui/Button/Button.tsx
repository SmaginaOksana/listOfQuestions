import "./Button.scss";

export default function Button({ children, isActive, ...props }) {
  const className = isActive ? "button active" : "button";

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
