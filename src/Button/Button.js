import React from 'react';
import classNames from 'classnames';
import './Button.css';

const Button = (props) => {
  const cssClasses = classNames('Button', props.className);

  return props.href
    ? <a {...props} className={cssClasses} />
    : <button {...props} className={cssClasses} />;
}

export default Button
