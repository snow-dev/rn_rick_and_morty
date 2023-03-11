import React from 'react';
import {View} from 'react-native';

import tw from '../../lib/tailwind';

interface ViewCardProps {
  children?: React.ReactNode;
}
const ViewCard = (props: ViewCardProps) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default ViewCard;

const styles = {
  card: tw.style('bg-rickGreen-400 rounded-xl p-2 m-2'),
};
