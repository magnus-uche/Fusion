import React from 'react'
import './form.css'

const FormInput = ({...otherProps}) => {

  return (
    <div>
    <label className='login_form_label'>{otherProps.label}</label>
    <br/>
    <input {...otherProps} required/>
    </div>
  )
}

export default FormInput;