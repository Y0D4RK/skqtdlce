import '../../../style/Wild.scss';

function Wild() {
  return (
    <div className="dice-face face--wild">
      <div className="board board--top">
        <div className="board-bolts board-bolts--left">
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
        </div>
        <div className="board-bolts board-bolts--right">
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
        </div>
      </div>
      <div className="board board--bottom">
        <div className="board-bolts board-bolts--left">
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
        </div>
        <div className="board-bolts board-bolts--right">
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
          <div className="board-bolt"></div>
        </div>
      </div>
    </div>
  );
}

export default Wild;
