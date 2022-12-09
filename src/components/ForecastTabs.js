import React from 'react';
import { Tabs } from '@mantine/core';
import { IconCalendar, IconClockHour3 } from '@tabler/icons';


const ForecastTabs = ({forecastday}) => {

  return (
    <div className="ForecastTabs">
      <Tabs defaultValue="day">
        <Tabs.List>
          <Tabs.Tab value="day" icon={<IconCalendar size={14} />}>Journée</Tabs.Tab>
          <Tabs.Tab value="hour" icon={<IconClockHour3 size={14} />}>Heure par heure</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="day" pt="xs">
          Journée
          <ul>
            <li>Matin 10h</li>
            <li>Après-midi 16h</li>
            <li>Soir 18h</li>
            <li>Nuit 02h</li>
          </ul>
        </Tabs.Panel>

        <Tabs.Panel value="hour" pt="xs">
          Météo heure par heure : tableau
        </Tabs.Panel>

      </Tabs>
    </div>
  )
}


export default ForecastTabs;