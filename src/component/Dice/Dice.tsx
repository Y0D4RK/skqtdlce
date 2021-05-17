import '../../style/Dice.scss';

type DiceProps = {
  sides: { [index: string]: any };
  selectedSideIndex: any;
  toggleRoll: boolean;
};

function Dice({ sides, selectedSideIndex, toggleRoll }: DiceProps) {
  const Face = sides[selectedSideIndex];

  return (
    <div className={`dice${toggleRoll ? ' dice--rolling' : ''}`}>
      <Face />
    </div>
  );
}

export default Dice;
