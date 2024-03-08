import React, { } from 'react';
import styles from './input.style';
import PropTypes from 'prop-types'

const Input = (props) => {
    return (
        <div 
        // className="input-group input-group-lg"
        // className="text-xs"
        >
            <input 
            className="form-control text-xs" 
            autoFocus={props.autofocus}
            placeholder={ props.placeholder}
            required = {props.required}
            maxLength = {props.length && props.lengthSize}
            style={{...styles.input,width : props.width,...props.style}}
            // size = {4}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            id={props.id}
            name = {props.name}
            spellCheck={props.spellcheck}
            min = {props.min}
           
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
            />
        </div>
    )
}



Input.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    placeholder: PropTypes.string.isRequired
}

export default Input
