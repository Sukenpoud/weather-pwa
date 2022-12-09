import React from 'react';
import { createStyles, Card, Text, Group, Image } from '@mantine/core';
// import { IconWind, IconSunHigh, IconCloud, IconSunWind, IconCloudRain, IconTornado, IconTemperaturePlus, IconTemperatureMinus } from '@tabler/icons';

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
}));

const CardWithStats = ({date, maxtemp, mintemp, maxwind, condition, sunrise, sunset, daily_will_it_rain, avghumidity, uv}) => {
  const { classes } = useStyles();

  /* Display day */
  const getDate = () => {
    const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    const d = new Date(date);
    let day = weekday[d.getDay()];
    var today = new Date();
    let dayT = weekday[today.getDay()];
    if ( day === dayT ) {
      return "Aujourd'hui";
    } else {
      return day;
    }
  }

  return (
    <div className="CardWithStats">
      <Card withBorder p="lg" className={classes.card}>
        <Group position="apart">
          <Text size="sm" weight={700}>
            {getDate()}
          </Text>
          <Group spacing={5}>
            <Text size="xs" color="dimmed">
              <Image
                width={64}
                height={64}
                src={condition.icon}
                alt={condition.text}
              />
              {condition.text}
            </Text>
          </Group>
        </Group>
        <Card.Section className={classes.footer}>
          <div>
            <Text size="xs" color="dimmed">
              {/* <IconTemperaturePlus size={18} className={classes.icon} stroke={1.5} /> */}
              Lever de soleil
            </Text>
            <Text weight={500} size="sm">
              {sunrise}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
            {/* <IconTemperaturePlus size={18} className={classes.icon} stroke={1.5} /> */}
              Coucher de soleil
            </Text>
            <Text weight={500} size="sm">
              {sunset}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
            {/* <IconTemperatureMinus size={18} className={classes.icon} stroke={1.5} /> */}
            Risque de pluie
            </Text>
            <Text weight={500} size="sm">
              {daily_will_it_rain}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
            {/* <IconTemperatureMinus size={18} className={classes.icon} stroke={1.5} /> */}
            Humidité
            </Text>
            <Text weight={500} size="sm">
              {avghumidity} %
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
            {/* <IconTemperatureMinus size={18} className={classes.icon} stroke={1.5} /> */}
            UV
            </Text>
            <Text weight={500} size="sm">
              {uv}
            </Text>
          </div>
        </Card.Section>
        <Card.Section className={classes.footer}>
          <div>
            <Text size="xs" color="dimmed">
              Vent
            </Text>
            <Text weight={500} size="sm">
              {maxwind} km/h
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
            {/* <IconTemperaturePlus size={18} className={classes.icon} stroke={1.5} /> */}
              Temp max.
            </Text>
            <Text weight={500} size="sm">
              {maxtemp} °C
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
            {/* <IconTemperatureMinus size={18} className={classes.icon} stroke={1.5} /> */}
            Temp min.
            </Text>
            <Text weight={500} size="sm">
              {mintemp} °C
            </Text>
          </div>
        </Card.Section>
      </Card>
    </div>
  )
}


export default CardWithStats;