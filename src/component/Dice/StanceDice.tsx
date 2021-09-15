import { RootStateOrAny, useSelector } from 'react-redux';

import Dice from './Dice';
import Switch from './Faces/Switch';
import Fakie from './Faces/Fakie';
import Regular from './Faces/Regular';
import Nollie from './Faces/Nollie';
import SkateDice from './Faces/SkateDice';
import Wild from './Faces/Wild';

type DiceProps = {
  selectedSideIndex: any;
  toggleRoll: boolean;
};

function StanceDice({ selectedSideIndex, toggleRoll }: DiceProps) {
  const isEasyMode = useSelector((state: RootStateOrAny) => state.isEasyMode);

  const regularModeDiceFaces = [
    Wild,
    SkateDice,
    Switch,
    Regular,
    Fakie,
    Nollie,
  ];
  const easyModeDiceFaces = [Wild, SkateDice, Regular, Regular, Fakie, Fakie];
  const sides = isEasyMode ? easyModeDiceFaces : regularModeDiceFaces;

  return (
    <Dice
      sides={sides}
      selectedSideIndex={selectedSideIndex}
      toggleRoll={toggleRoll}
    ></Dice>
  );
}

export default StanceDice;
