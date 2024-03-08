import React from 'react'

export default function Switch() {
  return (
    <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          checked
        //   onChange={this.handleSwitchChange(1)}
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
          {/* Toggle this switch element */}
        </label>
      </div>
  


  )
}
