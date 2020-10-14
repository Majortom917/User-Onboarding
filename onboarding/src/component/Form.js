import React, {useState} from 'react';
import './Form';
import formValues from '../App'


export default function Form(props){
  
    const { values, submit, change, disabled, errors } = props;
  /*   const [nameValue, setNameValue] = useState('') */
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };
  return (
    <div className="App">
        <form id ='theform' onSubmit = {onSubmit}>
            <label for= 'name'> Name </label>
                <input 
                type = 'text'
                name = 'name'
                value = {values.name}
                onChange={onChange}
                />

            <label for= 'email'>Email </label>
            <input 
                id = 'email'
                email = 'email'
                onChange={onChange}
                />

            <label for= 'password'> Password</label>
                <input 
                id = 'password' 
                password = 'password'
                onChange={onChange}

                />

            <label>
                <input
                    type = 'checkbox'
                    name = 'terms'
                    checked = {formValues.terms}
                    onChange ={onChange}  
                 />
            </label>

            <button type = 'submit' disabled = {disabled}>Submit</button>
        </form>
    </div>
  );
}
