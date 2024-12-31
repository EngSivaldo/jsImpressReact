const ColorSelection = (props) => {
  return (
    <section className="color-selection">
      <div onClick={() => props.setColor("red")}>
        <input type="checkbox" name="red" id="red" />
        <label htmlFor="red" className="color-box red"></label>
      </div>
      <div onClick={() => props.setColor("green")}>
        <input type="checkbox" name="green" id="green" />
        <label htmlFor="green" className="color-box green"></label>
      </div>
      <div onClick={() => props.setColor("yellow")}>
        <input type="checkbox" name="yellow" id="yellow" />
        <label htmlFor="yellow" className="color-box yellow"></label>
      </div>
      <div onClick={() => props.setColor("blue")}>
        <input type="checkbox" name="blue" id="blue" />
        <label htmlFor="blue" className="color-box blue"></label>
      </div>
    </section>
  );
};

export default ColorSelection;