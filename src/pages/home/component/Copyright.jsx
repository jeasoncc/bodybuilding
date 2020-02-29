import React from 'react';
import Typography from '@material-ui/core/Typography';
export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '0',
        right: '0',
      }}
    >
      {'Copyright © '}
        Your Website
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
