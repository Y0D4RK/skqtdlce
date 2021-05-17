// import { useSelector, useDispatch } from 'react-redux';
// import { toggleEasyMode } from './store';

import '../../style/ModeSwitch.scss';

const ModeSwitch = () => {
  // const isEasyMode = useSelector((state) => {
  //   return state.isEasyMode;
  // });
  const isEasyMode = true;
  // const dispatch = useDispatch();

  return (
    <div className="Mode">
      <div
        className={`Mode__switch${
          isEasyMode ? ' Mode__switch--is-easy-mode' : ''
        }`}
        // onClick={() => dispatch(toggleEasyMode())}
      >
        <div className="Mode__switch-button"></div>
      </div>
      <div className="Mode__label">WARM-UP MODE</div>
    </div>
  );
};

export default ModeSwitch;
