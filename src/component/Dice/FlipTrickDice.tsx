import Dice from './Dice';
import Heelflip from './Faces/Heelflip';
import Kickflip from './Faces/Kickflip';
import SkateDice from './Faces/SkateDice';
import Wild from './Faces/Wild';

type DiceProps = {
  selectedSideIndex: any;
  toggleRoll: boolean;
};

function FlipTrickDice({ selectedSideIndex, toggleRoll }: DiceProps) {
  return (
    <Dice
      sides={[Wild, SkateDice, Kickflip, Heelflip, Kickflip, Heelflip]}
      selectedSideIndex={selectedSideIndex}
      toggleRoll={toggleRoll}
    ></Dice>
  );
}

export default FlipTrickDice;
