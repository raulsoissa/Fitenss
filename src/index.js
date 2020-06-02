import React from 'react';
import ReactDOM from 'react-dom';


const user = {
  firstname: "Raúl",
  lastname: "Soissa",
  avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png"
}

function getName(user) {
  return `${user.firstname} ${user.lastname} `
  
}

function saludar(user) {
  if (user) {
    return <h1>Hola {getName(user)}</h1>
  }
  return <h1>Hola extraño</h1>
}

const element = <div className=""><h1>{saludar(user)}</h1></div>
const container = document.getElementById('root');

ReactDOM.render(element, container);