import React, { Fragment, useReducer} from "react";
// import ErrorModal from "../UI/ErrorModal";
import classes from "./HeighestVote.module.css";

const initialvotestate = 0;
const reducer = (state, action) => {
  
  // console.log(state, action);
  if (action.type === "AddVote") {
    return state + 1;
  }
  if (action.type === "DeleteVote") {
      
      return state - 1;
  }
  return state;
};

const HeighestVote = (props) => {
  // const [votecount,setVotecount]=useState(0);
  // const[error,setError]=useState();
  const [state, dispatch] = useReducer(reducer, initialvotestate);
  return (
    <Fragment>
      
      <div className={classes.votetracker}>
        <p
          className={classes.addvote}
          onClick={() => dispatch({ type: "AddVote" })}
        >
          👍
        </p>
        <p className={classes.totalvotes}> { state}
        {/* // .sort((prev,newVote)=>(prev.votes >newVote.votes ?-1:1))
        // .map((votes)=>(votes))} */}
        </p>
        

        <p
          className={classes.addvote}
          onClick={() => dispatch({ type: "DeleteVote" })}
        >
          👎
        </p>
       {/* <ErrorModal title={error.title} message={error.message}/> */}
      </div>
    </Fragment>
  );
};

export default HeighestVote;
