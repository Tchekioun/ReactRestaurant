import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// const contacts = [];
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

const ContactManager = (props) => {
  const [contacts, setContact] = useState(props.data);
  
  const addPerson = (name) => {
    setContact([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}


const AddPersonForm = (props) => {
  const [person, setPerson] = useState("");

  const handleChange = (e) => {
    setPerson(e.target.value);
  }
  const handleSubmit = (e) => {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person} />
      <button type='submit'>Add</button>
    </form>
  );

}

const PeopleList = (props) => {
  const arr = props.data;
  const listItems = arr.map((value, index) =>
    <li key={index}>{value}</li>
  )
  return <ul>{listItems}</ul>;
}


// const el = (
//   <div>
//     <AddPersonForm />
//     <PeopleList data={contacts} />
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactManager data={contacts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
