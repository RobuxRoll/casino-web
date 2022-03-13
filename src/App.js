import React, { useEffect, useState } from "react";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from './assets/deafult-avatar.png';
import './App.css';
import './index.css';

import RouletteComponent from './components/roulette.js';
const casino = {
  name: "Robux Roll"
}
const userLogedIn = true;
const user = {
  id: 0,
  userName: 'Joshua_Beoszos',
  balance: 13587
}

export default function App() {
  return (
    <div className="w-full h-screen bg-slate-800">
      <Header/>
      <Content/>
    </div>
  )
}

function Header() {
  return (
    <div className="w-full bg-gray-900 flex p-2">
      <div className="w-full text-left float-left">
        <span className="text-2xl p-1 font-bold text-white float-left">{casino.name}</span>
        <a href="App.js"></a>
      </div>
      <div className="w-full text-right float-left">
        <UserTab/>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className='w-full flex'>
      <RouletteComponent/>
    </div>
  )
}

function UserTab() {
  if (userLogedIn) {
    console.log(true);
    return (
      <span>
        <button className="rounded-md p-2 pl-4 pr-4 ml-2 text-green-500 font-semibold">
          <FontAwesomeIcon icon={faCoins} className="fill-green-500 mr-2"/>
          {user.balance}
        </button>
        <button className="bg-green-500 hover:bg-green-400 green-shadow rounded-md p-2 mb-1 pl-4 pr-4 transition-all ml-2 font-semibold">
          <img src={avatar} className="rounded-full w-6 float-left mr-3"></img> {user.userName}
        </button>
      </span>
    )} 
  else {
    return (
      <span>
        <button className="bg-slate-500 hover:bg-slate-400 slate-shadow rounded-md p-2 mb-1 pl-4 pr-4 transition-all ml-2 font-semibold">Login</button>
        <button className="bg-green-500 hover:bg-green-400 green-shadow rounded-md p-2 mb-1 pl-4 pr-4 transition-all ml-2 font-semibold">Register</button>
      </span>
    )}
}