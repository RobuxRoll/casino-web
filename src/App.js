import avatar from './assets/deafult-avatar.png';
import './App.css';
import './index.css';
import './svg/svgs.js';

const userLogedIn = true;
const user = {
  balance: 1337,
  userName: 'Joshua_Beoszos'
}

export default function App() {
  return (
    <div className="w-full h-screen bg-slate-800">
      <Header/>
      Here, ruleta!
    </div>
  )
}

function Header() {
  return (
    <div className="w-full bg-gray-900 flex p-2">
      <div className="w-full text-left float-left text-2xl p-1 font-bold text-white">Robux Roll</div>
      <div className="w-full text-right float-left">
        <UserTab/>
      </div>
    </div>
  )
}

function UserTab() {
  if (userLogedIn) {
    console.log(true);
    return (
      <span>
        <span className="p-2 text-white opacity-60">Balance: {user.balance} kr</span>
        <button className="bg-green-500 hover:bg-green-400 green-shadow rounded-md p-2 mb-1 pl-4 pr-4 transition-all ml-2 font-semibold">
          <img src={avatar} className="rounded-full w-6 float-left mr-3"></img> {user.userName}
        </button>
      </span>
    )} else {
      return (
        <span>
          <button className="bg-green-500 hover:bg-green-400 green-shadow rounded-md p-2 mb-1 pl-4 pr-4 transition-all ml-2 font-semibold">Register</button>
          <button className="bg-green-500 hover:bg-green-400 green-shadow rounded-md p-2 mb-1 pl-4 pr-4 transition-all ml-2 font-semibold">Login</button>
        </span>
    )}
}