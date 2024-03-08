import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AddNew = (props) => {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <i className="fas fa-plus-circle fa-x"></i>&nbsp;&nbsp;
        <div className="text-xs">
          <Link href={props.href}>Add New </Link>
        </div>
      </div>
    </div>
  );
};

AddNew.propTypes = {
    href : PropTypes.string.isRequired
};

export default AddNew;
