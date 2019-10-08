import React from 'react';
import Card from 'component/card/MediaCard.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import store from 'redux/stors/MyChoiceActionStore';
const useStyles = makeStyles({
  roots: {
    height: '100%',
    overflowY: 'scroll',
  },
});
export default function MyChoiceAction(props) {
  const classes = useStyles();
  const myChoice = store.getState();
  console.log(myChoice);
  return (
    <Container className={classes.roots}>
      {myChoice.map((cur, index) => (
        <Card key={index} obj={cur}></Card>
      ))}
    </Container>
  );
}
