import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;

//suppose you wanna use card as div i.e as wrapper and this card function gives css styling of card i.e
//the outer box 