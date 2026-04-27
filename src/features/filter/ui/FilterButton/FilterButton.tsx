import Button from "@shared/ui/Button/Button";

export function FilterButton({ children, isActive, ...props }) {
  return (
    <Button isActive={isActive} {...props}>
      {children}
    </Button>
  );
}
