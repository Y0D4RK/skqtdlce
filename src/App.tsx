import React, { useState } from 'react';
import { random, shuffle } from 'lodash';
import './style/App.scss';

import DirectionDice from './component/Dice/DirectionDice';
import FlipTrickDice from './component/Dice/FlipTrickDice';
import SpinDegreeDice from './component/Dice/SpinDegreeDice';
import StanceDice from './component/Dice/StanceDice';
import ModeSwitch from './component/Dice/ModeSwitch';

function App() {
  const [selectedSide, setSelectedSide] = useState([0, 1, 1, 0]);
  const [toggleRoll, setToggleRoll] = useState(true);

  const [allDice, setAllDice] = useState([
    DirectionDice,
    FlipTrickDice,
    SpinDegreeDice,
    StanceDice,
  ]);

  const rollDice = () => {
    setToggleRoll(!toggleRoll);

    setTimeout(() => {
      setSelectedSide([random(0, 5), random(0, 5), random(0, 5), random(0, 5)]);
      setAllDice(shuffle(allDice));
    }, 499);
  };

  document.title = 'SkateDice.io - React App';

  return (
    <div className="app-container">
      <h1>SK8DICE</h1>
      <h5>
        made by <a href="http://gauthier.cornette.io">Gauthier</a> with
        &#128153;
      </h5>
      <div className="dices">
        {allDice.map((TagName, index) => {
          return (
            <TagName
              key={index}
              selectedSideIndex={selectedSide[index]}
              toggleRoll={toggleRoll}
            />
          );
        })}
      </div>

      <div className="roll-dice">
        <button
          type="button"
          name="button"
          onClick={rollDice}
          className="rolldice__button"
        >
          PRESS ME <br />
          to roll the dices !
        </button>
        <p className="slogan">
          ...and start the <strong>real game</strong> !
        </p>
      </div>

      <ModeSwitch></ModeSwitch>
    </div>
  );
}

export default App;
