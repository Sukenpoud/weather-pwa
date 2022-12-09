import React from 'react';
import { createStyles, Card, Text, Group, Image } from '@mantine/core';
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

const CardWithStats = ({date, maxtemp, mintemp, maxwind, condition}) => {
  const { classes } = useStyles();

  /* Date formating */
  // const getDate = () => {
  //   let rawDate = new Date(date);
  //   let day = rawDate.getDate();
  //   let month = rawDate.getMonth()+1;
  //   let year = rawDate.getFullYear();
  //   day = day < 10 ? '0' + day : day;
  //   month = month < 10 ? '0' + month : month;
  //   let formattedDate = day + "/" + month + "/" + year;

  //   var today = new Date();
  //   let dayT = today.getDate();
  //   let monthT = today.getMonth()+1;
  //   let yearT = today.getFullYear();
  //   dayT = dayT < 10 ? '0' + dayT : dayT;
  //   monthT = monthT < 10 ? '0' + monthT : monthT;
  //   var dateToday = dayT + "/" + monthT + "/" + yearT;

  //   console.log(dateToday);
  //   if (formattedDate == dateToday) {
  //     return formattedDate = "Aujourd'hui"
  //   } else {
  //     return formattedDate;
  //   }
  // }
  const getDate = () => {
    const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    const d = new Date(date);
    let day = weekday[d.getDay()];
    var today = new Date();
    let dayT = weekday[today.getDay()];
    let formattedDate = "";
    if ( day == dayT ) {
      return formattedDate = "Aujourd'hui";
    } else {
      return formattedDate = day;
    }
  }

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Group position="apart" className={classes.title}>
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
  )
}


export default CardWithStats;