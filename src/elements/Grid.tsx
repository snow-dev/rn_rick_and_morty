import {EpisodeItem} from '../services/types';
import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import tw from './../../lib/tailwind';
import GridItem from './GridItem';

export type GridProps = {
  episodes?: EpisodeItem[];
};

const Grid = ({episodes}: GridProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const renderItem = ({item}: {item: {id: number; url: string}}) => {
    return (
      <GridItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={item.id === selectedId ? styles.selected : null}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={episodes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={5}
        contentContainerStyle={tw.style('justify-center self-distribute pl-5')}
      />
    </View>
  );
};

export default Grid;

const styles = {
  container: tw.style('flex-row items-center justify-center '),
  item: tw.style(' bg-gray-200 rounded-md m-1 p-2 w-1/6'),
  title: tw.style('text-xl text-center font-bold text-rickBlue-600'),
  selected: tw.style('bg-rickPink-700 '),
};
