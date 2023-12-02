import css from './Button.module.css';
import classNames from 'classnames';

const VioletButton = ({ onClick, children }) => {
  return (
    <button className={classNames(css.button, css.violetButton)} onClick={onClick}>
      {children}
    </button>
  );
};

export default VioletButton;