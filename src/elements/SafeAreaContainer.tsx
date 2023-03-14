import React from 'react';
import {SafeAreaView} from 'react-native';

import tw from './../../lib/tailwind';

interface Props {
  children?: React.ReactNode;
}
const SafeAreaViewContainer = ({children}: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeAreaViewContainer;

const styles = {
  container: tw.style('bg-rickGreen-300 h-full'),
};
