import React from 'react';
import Card from 'component/card/MediaCard.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  roots: {
    height: '100%',
    overflowY: 'scroll',
  },
});
export default function MyChoiceAction() {
  const classes = useStyles();
  return (
    <Container className={classes.roots}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Container>
  );
}
