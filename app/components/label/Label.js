import React  from 'react';
import styles from './Label.style';

const Label = (props) =>{
    return(
        <label 
        //   className={props.className ? props.className : 'badge bg-success text-xs'}
          className={props.className ? props.className : 'badge bg-primary text-xs'}
        style={{...styles.container,fontSize:props.size,
        borderRadius : 5,
        wordWrap  : 'break-word',
        width : props.width ,
        marginBottom : 15

        }}>
            {props.image} {props.title} 
            {
                props.required &&
                <span  style={styles.mark}> *
                </span>
            }
            
        </label>
       
    )
}

export default Label



