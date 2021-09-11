import React ,{useState}from "react";
import Card from "../UI/Card";
import classes from "./Addfeature.module.css";



const Addfeature = (props) => {
  const [enteredFeature, setEnteredFeature] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const addFeatureHandler = (event) => {
    event.preventDefault();
    if (enteredFeature.trim().length === 0) {
      return;
    }
    if (enteredDate.trim().length === 0) {
      return;
    }
    props.onAddFeature(enteredFeature,enteredDate);
    // console.log(enteredFeature);
    // console.log(enteredDate);
    setEnteredFeature("");
    setEnteredDate("");
  };

  const featureChangeHandler = (event) => {
    setEnteredFeature(event.target.value);
  };

  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
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
      <input type="Date"  value={enteredDate} className={classes.adddate} onChange={dateChangeHandler}/>
     

      <button className={classes.addfeaturebutton}>Submit</button>
    </form>
  </Card>);
};

export default Addfeature;
