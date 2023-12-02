import css from './Button.module.css';
import classNames from 'classnames';

const WhiteButton = ({ onClick, children }) => {
  return (
    <button className={classNames(css.whiteButton, css.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default WhiteButton;