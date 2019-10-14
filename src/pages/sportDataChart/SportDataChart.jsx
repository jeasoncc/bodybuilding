import React from 'react';
import Reminder from './views/Reminder';
import Chart from './views/Chart';
export default function SportDataChart() {
  return (
    <React.Fragment>
      <Chart />
      <Reminder />
    </React.Fragment>
  );
}
