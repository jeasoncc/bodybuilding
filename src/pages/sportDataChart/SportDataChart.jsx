import React from 'react';
import Reminder from './views/Reminder';
import Chart from './views/Chart';
import Chart2 from './views/Chart2';
import SwiperDrawer from 'component/navigation/views/SwiperDrawer';
export default function SportDataChart() {
  return (
    <React.Fragment>
      {/* <SwiperDrawer /> */}
      <Chart />
      <Chart2 />
      <Reminder />
    </React.Fragment>
  );
}
