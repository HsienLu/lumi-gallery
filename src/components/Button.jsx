export default function Button({
  children,
  as = "button",
  href,
  onClick,
  variant = "solid",
  size = "md",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition active:scale-98";
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-3",
  };
  const variants = {
    solid: "bg-[var(--brand)] text-black hover:opacity-90",
    outline:
      "border border-[var(--brand)] text-black hover:bg-[var(--brand)] hover:text-black",
    ghost: "hover:bg-[var(--brand)]/20 text-black",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (as === "a")
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
