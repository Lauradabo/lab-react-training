import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./component/Greetings.jsx";
import Random from "./component/Random.jsx";
import BoxColor from "./component/BoxColor.jsx";
import CreditCard from "./component/CreditCard.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        {student
        .map((person) => (
          <IdCard
            picture={person.picture}
            firstName={person.firstName}
            lastName={person.lastName}
            gender={person.gender}
            height={person.height}
            birth={person.birth}
          />
        ))}

        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Ludwig</Greetings>

        <h2>Random</h2>
        <div class="random-num">Random value between 1 and 6 =><Random min={1} max={6}/></div>
        <div class="random-num">Random value between 1 and 100 =><Random min={1} max={100}/></div>
        
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />  
        </p>
      </header>
    </div>
  );
}


function IdCard(props) {

  return (
    <div className="Card">
      <img src={props.picture} alt=""/>
      <ul>
      <li><span>First name:</span> {props.firstName}</li>
      <li><span>Last name:</span> {props.lastName}</li>
      <li><span>Gender:</span> {props.gender}</li>
      <li><span>Height:</span> {props.height}</li>
      <li><span>Birth: </span> {props.birth}</li>
     </ul>
    </div>
  );
}

const student = [
  {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:new Date("1992-07-14").toString(),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:new Date("1988-05-11").toString(),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
  },
  
];

const card = [
    {
        type:"Visa",
        number:"0123456789018845",
        expirationMonth:3,
        expirationYear:2021,
        bank:"BNP",
        owner:"Maxence Bouret",
        bgColor:"#11aa99",
        color:"white"
    },
    {
        type:"Master Card",
        number:"0123456789010995",
        expirationMonth:3,
        expirationYear:2021,
        bank:"N26",
        owner:"Maxence Bouret",
        bgColor:"#eeeeee",
        color:"#222222" 
    },
    {
        type:"Visa",
        number:"0123456789016984",
        expirationMonth:12,
        expirationYear:2019,
        bank:"Name of the Bank",
        owner:"Firstname Lastname",
        bgColor:"#ddbb55",
        color:"white",
    }
];



export default App;
