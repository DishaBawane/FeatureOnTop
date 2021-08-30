import React from "react";
import Card from "../UI/Card";
import classes from "./FeatureVoteTracker.module.css";

const FeatureVoteTracker = (props) => {
  return (
    <div>
      {props.features.map((feature) => (
        <Card>
          <div className={classes.featurelist}>
            {/* <div className={classes.votetracker}>
          <p className={classes.addvote}>👍</p>
          <p className={classes.totalvotes}> 10</p>
          <p className={classes.addvote}>👎</p>
        </div> */}
            <div>
              {/* <p className={classes.feature}>{feature.txt}</p> */}
              <input className={classes.feature}>{feature.txt}</input>
            </div>
          </div>
          {/* <div>
        <p className={classes.date}>14 Aug 2021</p>
      </div> */}
        </Card>
      ))}
    </div>
  );
};
export default FeatureVoteTracker;
