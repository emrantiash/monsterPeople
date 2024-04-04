import React from "react";
import PropTypes from "prop-types"; // rafcp

const Progressbar = (props) => {
  return (
    <div
      className="progress"
      style={{ backgroundColor: "", height: 18, width: 150, borderRadius: 5}}
    >
      <div
        className="progress-bar progress-bar-striped  text-xs"
        role="progressbar"
        style={{ width: `${props.completed}%` }}
        aria-valuenow={props.completed}
        aria-valuemin="0"
        aria-valuemax="100"
      >
       <div className="text-table"> {props.completed}% </div> 
      </div>
    </div>
  );
};

Progressbar.propTypes = {};

export default Progressbar;
