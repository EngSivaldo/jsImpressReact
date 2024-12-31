import ThirdWrapper from "./ThirdWrapper.jsx";

const SecondWrapper = (props) => {
  return <ThirdWrapper setColor={props.setColor} />

};

export default SecondWrapper;
