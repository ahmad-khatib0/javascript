import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className

  // props children is reserved word, the children will be what inside the <Card> </Card>
  return <div className={classes}>{props.children}</div>
}

export default Card
