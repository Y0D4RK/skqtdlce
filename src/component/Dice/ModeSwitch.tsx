import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { toggleEasyMode } from '../../store';

import '../../style/ModeSwitch.scss';

const ModeSwitch = () => {
  const isEasyMode = useSelector((state: RootStateOrAny) => state.isEasyMode);
  // const isEasyMode = true;
  const dispatch = useDispatch();

  return (
    <div className="mode">
      <div
        className={`mode__switch${
          isEasyMode ? ' mode__switch--is-easy-mode' : ''
        }`}
        onClick={() => dispatch(toggleEasyMode())}
      >
        <div className="mode__switch-button"></div>
      </div>
      <div className="mode__label">WARM-UP MODE</div>
    </div>
  );
};

export default ModeSwitch;
