import React ,{useState}from "react";
import Card from "../UI/Card";
import classes from "./Addfeature.module.css";

const Addfeature = (props) => {
  const [enteredFeature, setEnteredFeature] = useState('');
  const addFeatureHandler = (event) => {
    event.preventDefault();
    if (enteredFeature.trim().length === 0) {
      return;
    }
    props.onAddFeature(enteredFeature);
    // console.log(enteredFeature);
    setEnteredFeature("");
  };

  const featureChangeHandler = (event) => {
    setEnteredFeature(event.target.value);
  };
  return(
  <Card className={classes.cardaddfeature}>
    <form onSubmit={addFeatureHandler}>
      <input
        type="text"
        className={classes.addFeature}
        value={enteredFeature}
        onChange={featureChangeHandler}
      />
      <button className={classes.addfeaturebutton}>Submit</button>
    </form>
  </Card>);
};

export default Addfeature;
