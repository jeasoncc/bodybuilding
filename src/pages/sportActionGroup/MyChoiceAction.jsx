import React from 'react';
import Card from 'component/card/MediaCard.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import store from 'redux/stors/MyChoiceActionStore';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  roots: {
    height: '100%',
    overflowY: 'scroll',
  },
});
export default function MyChoiceAction(props) {
  const classes = useStyles();
  const myChoice = store.getState();
  const [exciseVolume, setExciseVolume] = React.useState(0);
  let mynum = 0;
  React.useEffect(() => {
    myChoice.map(cur => {
      console.log(cur);
      mynum = cur.numGroup * cur.kilo + mynum;
    });
    setExciseVolume(mynum);
  });
  console.log(myChoice);
  return (
    <Container className={classes.roots}>
      {myChoice.map((cur, index) => (
        <Card key={index} obj={cur}></Card>
      ))}
      <Typography component="div">
        <Box fontStyle="italic" m={1}>
          您今天的训练容量{exciseVolume}kg
        </Box>
      </Typography>
    </Container>
  );
}
