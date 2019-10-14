import React from 'react';
import Reminder from './views/Reminder';
import Chart from './views/Chart';
import SwiperDrawer from 'component/navigation/views/SwiperDrawer';
export default function SportDataChart() {
  return (
    <React.Fragment>
      {/* <SwiperDrawer /> */}
      <Chart />
      <Reminder />
    </React.Fragment>
  );
}
