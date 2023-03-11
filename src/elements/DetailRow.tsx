import React from 'react';
import {Text, View} from 'react-native';

import tw from '../../lib/tailwind';

interface DetailRowProps {
  children?: React.ReactNode;
  title?: string | undefined;
  value?: string | undefined;
  variant?: 'home' | 'detail';
}
const DetailRow = ({children, title, value, variant}: DetailRowProps) => {
  if (children) {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    );
  }
  if (variant === 'home') {
    return (
      <View style={styles.column}>
        <Text style={styles.home}>{value}</Text>
      </View>
    );
  }
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default DetailRow;

const styles = {
  title: tw.style(
    'text-rickLightBlue-400 font-bold text-xl mr-2 text-left w-25%',
  ),
  value: tw.style('text-rickOrange-600 text-lg  text-right'),

  row: tw.style('flex-row mt-2'),
  column: tw.style('flex-col'),
  home: tw.style('text-rickOrange-500 text-lg justify-center w-60'),
};
