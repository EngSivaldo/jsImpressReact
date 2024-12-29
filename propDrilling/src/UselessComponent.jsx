import IntermediateComponent from "./IntermediateComponent";

const UselessComponent = (props) => {
  return (
    <IntermediateComponent {...props} >{props.children}</IntermediateComponent>
  );
};

export default UselessComponent;
