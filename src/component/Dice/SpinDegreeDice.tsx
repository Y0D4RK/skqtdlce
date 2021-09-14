import { RootStateOrAny, useSelector } from 'react-redux';

import Dice from './Dice';
import OneEighty from './Faces/OneEighty';
import ThreeSixty from './Faces/ThreeSixty';
import SkateDice from './Faces/SkateDice';
import Wild from './Faces/Wild';

type DiceProps = {
  selectedSideIndex: any;
  toggleRoll: boolean;
};

function SpinDegreeDice({ selectedSideIndex, toggleRoll }: DiceProps) {
  const isEasyMode = useSelector((state: RootStateOrAny) => state.isEasyMode);
  // const isEasyMode = true;

  const regularModeDiceFaces = [
    Wild,
    SkateDice,
    OneEighty,
    ThreeSixty,
    OneEighty,
    ThreeSixty,
  ];
  const easyModeDiceFaces = [
    Wild,
    SkateDice,
    OneEighty,
    OneEighty,
    OneEighty,
    SkateDice,
  ];

  const sides = isEasyMode ? easyModeDiceFaces : regularModeDiceFaces;

  return (
    <Dice
      sides={sides}
      selectedSideIndex={selectedSideIndex}
      toggleRoll={toggleRoll}
    ></Dice>
  );
}

export default SpinDegreeDice;
