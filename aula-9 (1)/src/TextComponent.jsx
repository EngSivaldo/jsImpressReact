const TextComponent = ({ children, color }) => {
  return (
    <i className="text-component" style={{ color: color, fontWeight: "bold" }}>
      {children}
    </i>
  );
};

export default TextComponent;