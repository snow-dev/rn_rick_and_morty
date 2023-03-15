import React, {useState} from 'react';

import {EpisodeItem} from '../utils/types';
import {FlatList, Text, View} from 'react-native';
import tw from './../../lib/tailwind';
import GridItem from './GridItem';

export type GridProps = {
  episodes?: EpisodeItem[];
  onPress: (item: number) => void;
};

const Grid = ({episodes, onPress}: GridProps) => {
  const [selected, setSelected] = useState<EpisodeItem>();

  const handleSelect = (item: EpisodeItem) => {
    setSelected(item);
    onPress(item.id);
  };

  const renderItem = ({item}: {item: {id: number; url: string}}) => {
    return (
      <GridItem
        item={item}
        onPress={() => handleSelect(item)}
        style={item.id === selected?.id ? styles.selected : null}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        {selected && <Text style={tw`flex-row`}>Episode #{selected.id}: </Text>}
      </View>
      <View style={styles.container}>
        <FlatList
          data={episodes}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={5}
          contentContainerStyle={tw.style('justify-center pl-5')}
        />
      </View>
    </>
  );
};

export default Grid;

const styles = {
  container: tw.style('flex-row items-center justify-center '),
  item: tw.style(' bg-gray-200 rounded-md m-1 p-2 w-1/6'),
  title: tw.style('text-xl text-center font-bold text-rickBlue-600'),
  selected: tw.style('bg-rickPink-700 '),
};
