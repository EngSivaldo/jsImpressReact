import SecondWrapper from "./SecondWrapper.jsx";

const FirstWrapper = (props) => {
  return <SecondWrapper setColor={props.setColor}/>

};

export default FirstWrapper;
