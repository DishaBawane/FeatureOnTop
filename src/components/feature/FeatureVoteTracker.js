import React from "react";
import Card from "../UI/Card";
import HeighestVote from "./HeighestVote";
import classes from "./FeatureVoteTracker.module.css";

const FeatureVoteTracker = (props) => {
  return (
    <div>
      {props.features.map((feature) => (
        <Card  key={feature.id}>
          <div className={classes.featurelist}>
              <HeighestVote/>
            <div>
              <p className={classes.feature} >{feature.feature}</p>
            </div>
          </div>
          <div>
            <p className={classes.date}>{feature.date}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default FeatureVoteTracker;
