import React from 'react';
import { Tabs, Table, Image } from '@mantine/core';
import { IconCalendar, IconClockHour3 } from '@tabler/icons';


const ForecastTabs = ({forecastday}) => {

  const hours = forecastday.hour;
  return (
    <div className="ForecastTabs">
      <Tabs defaultValue="day">
        <Tabs.List>
          <Tabs.Tab value="day" icon={<IconCalendar size={14} />}>Journée</Tabs.Tab>
          <Tabs.Tab value="hour" icon={<IconClockHour3 size={14} />}>Heure par heure</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="day" pt="xs">
            <div>Matin : {Math.round(forecastday.hour[8].temp_c)} °C</div>
            <div>Après-midi : {Math.round(forecastday.hour[14].temp_c)} °C</div>
            <div>Soir : {Math.round(forecastday.hour[20].temp_c)} °C</div>
            <div>Nuit : {Math.round(forecastday.hour[23].temp_c)} °C</div>
        </Tabs.Panel>

        <Tabs.Panel value="hour" pt="xs" className='hour-tab'>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  {
                  hours.map((column, index) => (
                    <th key={index}>{index}h</th>
                  ))
                  }
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temps</td>
                  {
                  hours.map((column, index) => (
                    <td key={index}>
                      <Image
                        width={32}
                        height={32}
                        src={column.condition.icon}
                        alt={column.condition.text}
                      />
                  </td>
                  ))
                  }
                </tr>
                <tr>
                  <td>Température</td>
                  {
                  hours.map((column, index) => (
                    <td key={index}>{column.temp_c} °C</td>
                  ))
                  }
                </tr>
                <tr>
                  <td>Vent</td>
                  {
                  hours.map((column, index) => (
                    <td key={index}>{column.wind_kph} km/h</td>
                  ))
                  }
                </tr>
              </tbody>
            </Table>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}


export default ForecastTabs;