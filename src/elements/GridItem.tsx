import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import {EpisodeItem} from '../services/types';

export type GridItemProps = {
  item: EpisodeItem;
  onPress: () => void;
  style: any;
};
const GridItem = ({item, onPress, style}: GridItemProps): JSX.Element => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.id}</Text>
  </TouchableOpacity>
);

export default GridItem;

const styles = {
  item: tw.style(' bg-gray-200 rounded-md m-1 p-2 w-1/6'),
  title: tw.style('text-xl text-center font-bold text-rickBlue-600'),
};
