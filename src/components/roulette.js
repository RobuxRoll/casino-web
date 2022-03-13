import '../App.css';
import '../index.css';

import Countdown from 'react-countdown';

const d = new Date();
let time = d.getTime();
let nextTime = time + 20000;

const rouletteFetch = {
    nextRouletteTime: nextTime,     // time, when next game starts
    rouletteResult: 1,              // end roulette result
                                    // - 0: black, 1: red, 2: green
    userBalance: 2950358,           // user balance after previous game
}

const roulettePost = {
    userBet: 10,                    // coins bet from user
    userBetColor: 1                 // betted color from user
}

const rouletteBlack = [
    100,
    300,
    600,
    800,
    1000,
    1200
]

const rouletteRed = [
    0,
    200,
    400,
    700,
    900,
    1100
]

const rouletteGreen = 500;

let rollFormat;
let rollCSS;

const renderer = ({ hours, minutes, seconds, milliseconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className='h-full w-full text-center absolute text-xl bg-opacity-30 bg-slate-800 text-white transition-all'>
                BETTING<br/>
                <span className='text-6xl font-bold'>
                    <span>{seconds}.{milliseconds}</span>
                </span>
            </div>
        )
    }
};

const Completionist = () => <span>You are good to go!</span>;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function RouletteRoll() {
    let ranAdd = getRandom(51,147);
    if (rouletteFetch.rouletteResult === 0) {
        return (ranAdd + rouletteBlack[getRandom(0,5)]) + 1300;
    } else if(rouletteFetch.rouletteResult === 1) {
        return (ranAdd + rouletteRed[getRandom(0,5)]) + 1300;
    } else if (rouletteFetch.rouletteResult === 2) {
        return (ranAdd + rouletteGreen) + 1300;
    } else {
        console.log('Error, rouletteFetch.rouletteResult === ' + rouletteFetch.rouletteResult);
    }
}

function RouletteSpin() {
    rollFormat = "calc(50% - " + RouletteRoll() + 'px)';
}

function NextRouletteTime() {
    return (
        <Countdown
            date={rouletteFetch.nextRouletteTime}
            intervalDelay={1}
            precision={3}
            renderer={renderer}
            zeroPadTime={0}
        />
    )
}

export default function RouletteComponent() {
    RouletteSpin();
    rollCSS = {
        backgroundPosition: rollFormat
    }
    return (
        <div style={rollCSS} id='spinner' className='auto-width w-full spinner bg-slate-800 m-10 mt-10 mb-10 overflow-hidden relative transition-all'>
            <div className='h-full w-1 bg-red-600 rounded-lg absolute left-1/2'></div>
            <NextRouletteTime/>
            <button>RollAgain</button>
        </div>
    )
}