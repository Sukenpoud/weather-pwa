import React from 'react';
import { createStyles, Card, Text, Group } from '@mantine/core';
import { IconWind, IconSunHigh, IconCloud, IconSunWind, IconCloudRain, IconTornado, IconTemperaturePlus, IconTemperatureMinus } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    display: 'flex',
    gap: '5px',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: '20px',
  },
}));

const CardWithStats = ({day, wind, temp, description}) => {
  const { classes } = useStyles();

  let temps  = { icon: IconSunHigh };

  if (description == "Nuageux") {
    temps = { icon: IconCloud };
  }

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Group position="apart" className={classes.title}>
        <Text size="sm" weight={700}>
          {day}
        </Text>
        <Group spacing={5}>
          <Text size="xs" color="dimmed">
            <temps.icon size={24} className={classes.icon} stroke={1.5} />
          </Text>
        </Group>
      </Group>
      <Card.Section className={classes.footer}>
        <div>
          <Text size="xs" color="dimmed">
          {/* <IconWind size={18} className={classes.icon} stroke={1.5} /> */}
            Vent
          </Text>
          <Text weight={500} size="sm">
            {wind} km/h
          </Text>
        </div>
        <div>
          <Text size="xs" color="dimmed">
          {/* <IconTemperaturePlus size={18} className={classes.icon} stroke={1.5} /> */}
            Temp max.
          </Text>
          <Text weight={500} size="sm">
            {temp} °C
          </Text>
        </div>
        <div>
          <Text size="xs" color="dimmed">
          {/* <IconTemperatureMinus size={18} className={classes.icon} stroke={1.5} /> */}
          Temp min.
          </Text>
          <Text weight={500} size="sm">
            {temp} °C
          </Text>
        </div>
      </Card.Section>
      
    </Card>
  )
}


export default CardWithStats;