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

        <Tabs.Panel value="day" pt="xs" className='day-tab'>
          <Table>
            <tbody>
              <tr>
                <td className='day-strong'>Matin :</td>
                <td><Image
                    width={32}
                    height={32}
                    src={forecastday.hour[8].condition.icon}
                    alt={forecastday.hour[8].condition.text}
                  /></td>
                <td>{Math.round(forecastday.hour[8].temp_c)} °C</td>
              </tr>
              <tr>
                <td className='day-strong'>Après-midi :</td>
                <td><Image
                    width={32}
                    height={32}
                    src={forecastday.hour[14].condition.icon}
                    alt={forecastday.hour[14].condition.text}
                  /></td>
                <td>{Math.round(forecastday.hour[14].temp_c)} °C</td>
              </tr>
              <tr>
                <td className='day-strong'>Soir :</td>
                <td><Image
                    width={32}
                    height={32}
                    src={forecastday.hour[20].condition.icon}
                    alt={forecastday.hour[20].condition.text}
                  /></td>
                <td>{Math.round(forecastday.hour[20].temp_c)} °C</td>
              </tr>
              <tr>
                <td className='day-strong'>Nuit :</td>
                <td><Image
                    width={32}
                    height={32}
                    src={forecastday.hour[23].condition.icon}
                    alt={forecastday.hour[23].condition.text}
                  /></td>
                <td>{Math.round(forecastday.hour[23].temp_c)} °C</td>
              </tr>
            </tbody>
          </Table>
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
                    <td key={index}>{Math.round(column.temp_c)} °C</td>
                  ))
                  }
                </tr>
                <tr className='trvent'>
                  <td>Vent</td>
                  {
                  hours.map((column, index) => (
                    <td key={index}>{column.wind_kph} <span className='kmh'>km/h</span></td>
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