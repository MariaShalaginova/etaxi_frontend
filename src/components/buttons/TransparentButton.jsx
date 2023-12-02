import css from './Button.module.css';
import classNames from 'classnames';

const TransparentButton = ({ onClick, children }) => {
  return (
    <button className={classNames(css.transparentButton, css.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default TransparentButton;