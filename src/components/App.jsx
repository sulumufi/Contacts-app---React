import React from "react";
import Card from "./Card";
import Contacts from "../contacts.js";
import contacts from "../contacts.js";
import card from "./Card";


function createCard(props){
  return <Card
  key = {props.id}
  name= {props.name}
  img = {props.imgURL}
  tel = {props.phone}
  email = {props.email}
   />;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}

      {/* <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
