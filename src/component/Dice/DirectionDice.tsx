import Dice from './Dice';
import Backside from './Faces/Backside';
import Frontside from './Faces/Frontside';
import SkateDice from './Faces/SkateDice';
import Wild from './Faces/Wild';

type DiceProps = {
  selectedSideIndex: any;
  toggleRoll: boolean;
};

function DirectionDice({ selectedSideIndex, toggleRoll }: DiceProps) {
  return (
    <Dice
      sides={[Wild, SkateDice, Frontside, Backside, Frontside, Backside]}
      selectedSideIndex={selectedSideIndex}
      toggleRoll={toggleRoll}
    ></Dice>
  );
}

export default DirectionDice;
