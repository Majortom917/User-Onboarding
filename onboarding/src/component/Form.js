import React from 'react';
import './Form';
import formValues from '../App'


export default function Form(props){
  
    const { values, submit, change, disabled } = props;
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
            <label htmlFor = 'name'> Name </label>
                <input 
                type = 'text'
                name = 'name'
                value = {values.name}
                onChange={onChange}
                />

            <label htmlFor = 'email'>Email </label>
            <input 
                type = 'text'
                name = 'email'
                id = 'email'
                value = {values.email}
                onChange={onChange}
                />

            <label htmlFor = 'password'> Password</label>
                <input 
                type ='text'
                id = 'password' 
                name = 'password'
                value = {values.password}
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

            <button id= 'submitBtn' type = 'submit' disabled = {disabled}>Submit</button>
        </form>
    </div>
  );
}
