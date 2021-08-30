import React from "react";
import Card from "../UI/Card";
import classes from "./FeatureVoteTracker.module.css";

const FeatureVoteTracker = (props) => {
  return (
    <Card>
      <div className={classes.featurelist}>
        {/* <div className={classes.votetracker}>
          <p className={classes.addvote}>👍</p>
          <p className={classes.totalvotes}> 10</p>
          <p className={classes.addvote}>👎</p>
        </div> */}
        <div>
          {props.features.map((feature) => (
            <p className={classes.feature}>{feature.txt}</p>
          ))}
        </div>
      </div>
      {/* <div>
        <p className={classes.date}>14 Aug 2021</p>
      </div> */}
    </Card>
  );
};
export default FeatureVoteTracker;
