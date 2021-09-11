import React, { useState } from "react";
import "./App.css";
import Addfeature from "./components/feature/Addfeature";
import FeatureVoteTracker from "./components/feature/FeatureVoteTracker";
import Header from "./components/Layout/Header";

function App() {
  const [featuresList, setFeaturesList] = useState([]);


  const addFeatureHandler = (newFeature,newDate) => {
 
    setFeaturesList((prevFeaturesList) => {
   

      return [...prevFeaturesList,{feature:newFeature,date:newDate,id:Math.random().toString()}];
    });
  };
  return (
    <div className="App">
      <Header />
      <Addfeature onAddFeature={addFeatureHandler} />
      <FeatureVoteTracker features={featuresList} />
    </div>
  );
}

export default App;
