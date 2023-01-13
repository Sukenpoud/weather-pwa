import React from 'react';
import { createStyles, Card, Text, Group, Image } from '@mantine/core';
import { IconTemperaturePlus, IconTemperatureMinus, IconSunrise, IconSunset } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    color: '#080808',
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
        <Group position="apart" className='head-card'>
          <Group>
            <Group spacing={5}>
              <Text size="xs" color="dimmed">
                <Image
                  width={64}
                  height={64}
                  src={condition.icon}
                  alt={condition.text}
                />
              </Text>
            </Group>
            <Text size="sm" weight={700}>
              {getDate()}
              <Text size="xs" color="dimmed" weight={400}>
                {condition.text}
              </Text>
            </Text>
          </Group>

          <Group>
            <Group>
              <IconTemperaturePlus size={32} className={classes.icon} stroke={1.2} color={'#080808'} />
              <Text>
                {Math.round(maxtemp)} °C
              </Text>
            </Group>
            <Group>
              <IconTemperatureMinus size={32} className={classes.icon} stroke={1.2} color={'#080808'} />
              <Text>
                {Math.round(mintemp)} °C
              </Text>
            </Group>
            
          </Group>

        </Group>
        <Card.Section className={classes.footer}>
          <div>
            <IconSunrise size={24} className={classes.icon} stroke={1.5} />
            <Text size="sm">
              {sunrise}
            </Text>
          </div>
          <div>
            <IconSunset size={24} className={classes.icon} stroke={1.5} />
            <Text size="sm">
              {sunset}
            </Text>
          </div>
        </Card.Section>
        <Card.Section className={classes.footer}>
          <div>
            <Text size="xs" color="dimmed">
              Risque de pluie
            </Text>
            <Text size="sm">
              {daily_will_it_rain}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
              Humidité
            </Text>
            <Text size="sm">
              {avghumidity} %
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
              UV
            </Text>
            <Text size="sm">
              {uv}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
              Vent
            </Text>
            <Text size="sm">
              {maxwind} km/h
            </Text>
          </div>
        </Card.Section>
      </Card>
    </div>
  )
}


export default CardWithStats;