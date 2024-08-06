import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import data from '../src/assets/data.json';

export default function ChartsOverviewDemo() {
  const formattedData = data.map(item => ({
    time: new Date(item.time).toLocaleDateString(),
    value: item.value
  }));

  return (
    <BarChart
      series={[
        { data: formattedData.map(item => item.value), label: 'Value' }
      ]}
      height={290}
      xAxis={[{ data: formattedData.map(item => item.time), scaleType: 'band', label: 'Time' }]}
      yAxis={[{ label: 'Value' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
