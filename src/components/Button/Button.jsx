import "./Button.scss";

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function FilterButton({ children, isActive, ...props }) {
  const className = isActive ? "filterButton active" : "filterButton";

  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
}
