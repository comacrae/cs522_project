import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Pause = ({ route }) => {
  const { minutes, breakMinutes, name, navigation, numIteration } = route.params;
  const [breakSeconds, setBreakSeconds] = useState(breakMinutes * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
      setBreakSeconds(minutes * 60);
      setIsActive(true)
    },[numIteration]);

  useEffect(() => {
      let interval;
      if (isActive && breakSeconds > 0) {
        interval = setInterval(() => {
          setBreakSeconds((prevBreakSeconds) => prevBreakSeconds - 1);
        }, 1000);
      } else if (breakSeconds === 0) {
        clearInterval(interval);
        setIsActive(false);
        alert('Pause is up!');
        navigation.navigate('Timer', {
          minutes: minutes,
          breakMinutes: breakMinutes,
          name: name,
          navigation: navigation,
          numIteration: numIteration+1
        });
      }
      return () => clearInterval(interval);
    }, [isActive, breakSeconds, minutes, breakMinutes, name, navigation]);

  const formatTime = () => {
    const breakMinutes = Math.floor(breakSeconds / 60);
    const secondsLeft = breakSeconds % 60;
    return `${String(breakMinutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
    <Image source={require('./icons/timer_icon.png')} style={styles.icon} />
      <View style={styles.box}>
        <Text style={styles.timer}>{formatTime()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    marginBottom: 32,
  },
  timer: {
    fontSize: 48,
  },
  icon: {
      width: 120,
      height: 120,
      margin: 20,
    },
});

export default Pause;
