import React from 'react';
import styles  from './Select.style';
import PropTypes from 'prop-types';

const Select = props => {
    return (
        <div>
            <select className="text-xs" aria-label="Default select example" 
            disabled = {props.disabled}
            style={{
                ...props.style,
                fontSize:'.8rem',
                // borderRadius:'0.9rem',
                padding: '0.9rem 1rem ',
                color:'#495057',
                // border : '1px solid #ced4da ',
                 width : '100%'
            }}
            onChange={(e)=>props.onchange(e)}            
            >
                {
                    props.placement &&
                    <option defaultValue={"1"}>{ props.name ? props.text : "Select"}</option>
                }
                

                {
                   Array.isArray(props.data) &&  props.data !=null && props.data!= undefined && 
                    props.data.map((data,index)=>
                    <option  value={[data.id]} key={index} className='text-xs'>{data.name} </option>

                    
                    )
                }
            </select>
        </div>
    )
}

Select.propTypes = {
     width : PropTypes.string
}

export default Select