import classes from './button.module.css';

export default function Button({
  type,
  text,
  onClick,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
}) {
  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        type={type}
        onClick={onClick}
        style={{
          color,
          backgroundColor,
          fontSize,
          width,
          height,
        }}
      >
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: 'button',
  text: 'Proceed to Payment',
  backgroundColor: '#ff7b00',
  color: 'white',
  fontSize: '1.2rem',
  width: '240px',
  height: '55px',
};
