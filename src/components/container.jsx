//container component to wrap sections

export default function Container({ children, className = "" }) {
  return (
    <section className={`container mx-auto sm:px-10 px-4 max-w-[1280px] ${className}`}>
      {children}
    </section>

  );
}
