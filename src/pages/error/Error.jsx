import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > svg': {
      margin: theme.spacing(2)
    }
  },
  iconHover: {
    '&:hover': {
      color: blue[800]
    }
  }
}));

export default function SvgIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThreeDRotation
        color="primary"
        style={{ fontSize: 230 }}
        component={svgProps => {
          return (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="30%" stopColor={blue[400]} />
                  <stop offset="70%" stopColor={red[400]} />
                </linearGradient>
              </defs>
              {React.cloneElement(svgProps.children[0], {
                fill: 'url(#gradient1)'
              })}
            </svg>
          );
        }}
      />
    </div>
  );
}
