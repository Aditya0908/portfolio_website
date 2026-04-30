const variants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
  secondary: "bg-white/10 border border-white/20 hover:bg-white/20 text-white",
  outline:
    "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
};

export function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
