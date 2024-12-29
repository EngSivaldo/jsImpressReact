const IntermediateComponent = (props) => {
  return <h1 style={{ backgroundColor: props.backgroundColor }}>{props.children}</h1>;
};

export default IntermediateComponent;
