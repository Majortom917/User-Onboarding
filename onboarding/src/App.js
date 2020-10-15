import React, {useState, useEffect} from 'react';
import Form from './component/Form'
import {v4 as uuid} from 'uuid'
import * as yup from 'yup'
import './App.css';
import schema from './schema/formSchema'



const initialFriends = [
  {id: uuid(), name: 'Throckmorton', email:'sk8tercousin@hautmail.com', password: 'coolsk8'},
  {id: uuid(), name: 'Hue Janus', email:'HueJ@hautmail.com', password: 'hole'},
  {id: uuid(), name: 'Phil Mckracken', email:'Philcrack@hautmail.com', password: 'Davey Jones Locker'},
]
const initialFormValues = {
  name:'',
  email: '',
 password: '',
 terms: false
}
const initialFormErrors = {
  username: "",
  email: "",
 password: "",
  terms: "",
};
const initialDisabled = false;

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)
  const [friends, setFriends] = useState(initialFriends)
  
  const inputChange = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value) 
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });

    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };

  const formSubmit = () => {
    const newFriend = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    setFriends(...friends, newFriend)
  }
  

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
     setDisabled(!valid);
     console.log(valid)
    });
  }, [formValues]);

  return (
    <div className="App">
      <header className="App-header">
        <Form
         values={formValues}
         change={inputChange}
         submit={formSubmit}
         disabled={disabled}
         errors={formErrors}
        />
        {friends.map(fr => <div key={fr.id}>
          {fr.name} {fr.email} 
        </div>)
        }
      </header>
    </div>
  );
}

