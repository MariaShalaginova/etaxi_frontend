import css from './Button.module.css';
import classNames from 'classnames';

const LiteVioletButton = ({ onClick, children }) => {
  return (
    <button className={classNames(css.liteVioletButton, css.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default LiteVioletButton;