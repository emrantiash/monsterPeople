import React from 'react';


const Button = (props) => {
  return (
    <div>
      <button
        // className="btn btn-user btn-block btn-danger"
        type={props.file ? "file" :"button"}
        className={props.class}

        onClick={props.onclick}
        style={{
          width: props.width
        }}
      >
          <span 
        style={{
          paddingRight : 5,

        }}>
          {props.icon}
        </span>
        {props.text}
      
      </button>
    </div>
  )
}

export default Button

