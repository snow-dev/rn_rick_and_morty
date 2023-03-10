import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import tw from 'twrnc';

import {useGetCharactersQuery} from './services/character';
import {DetailScreenNavigationProp} from './services/types';
import {useNavigation} from '@react-navigation/native';
import ImageEl from './elements/Image';
import TouchableButton from './elements/TouchableButton';

function App(): JSX.Element {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const {data, error, isLoading} = useGetCharactersQuery();

  return (
    <SafeAreaView>
      <View style={styles.titleView}>
        <Text style={[styles.seriesText, tw`text-text`]}>Rick and Morty</Text>
        <Text style={styles.charText}>Character's</Text>
      </View>
      <ScrollView>
        <View style={tw`p-1 android:pt-1 bg-white dark:bg-black`}>
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>Something went worn, try again!</Text>}
          {data?.results.map((item, index) => (
            <View key={index - Date.now()} style={styles.itemGrid}>
              <View style={tw`flex-row items-center`}>
                <ImageEl variant="avatar" source={item.image} />
                <Text key={index} style={styles.textName}>
                  {item.name}
                </Text>
              </View>

              <View style={styles.detailsView}>
                <Text key={index} style={styles.textStats}>
                  Gender: {item.gender}
                </Text>

                <Text key={index} style={styles.textStats}>
                  Status: {item.status}
                </Text>
              </View>

              <View style={styles.detailsView}>
                <Text key={index} style={styles.textStats}>
                  Specie: {item.species}
                </Text>

                <Text key={index} style={styles.textStats}>
                  Type: {item.type}
                </Text>
              </View>

              <View style={styles.detailsView}>
                <Text key={index} style={styles.textStats}>
                  Origin: {item.origin.name}
                </Text>
              </View>

              <View style={styles.detailsView}>
                <Text key={index} style={styles.textStats}>
                  Location: {item.location.name}
                </Text>
              </View>

              <View style={tw`flex-row justify-end mt-5 mb-4 mr-4`}>
                <TouchableButton
                  title={'Show more'}
                  onPress={() => navigation.navigate('Details', {id: item.id})}
                  variant={'primary'}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;

const styles = {
  titleView: tw.style('flex-row items-center justify-center mt-4 mb-4'),
  seriesText: tw.style(
    'text-3xl font-bold text-{29c86b} dark:text-gray-200 mb-10 mr-4',
  ),
  charText: tw.style(
    'text-xl font-bold text-gray-800 dark:text-gray-200 ml-{30}',
  ),

  itemGrid: tw.style('border-2 border-gray-200 rounded-lg p-2 m-2'),
  textName: tw.style('text-lg font-bold text-gray-800 dark:text-gray-200'),
  textStats: tw.style('text-sm text-blue-800 dark:text-blue-200 ml-4'),
  avatar: tw.style('w-16 h-16 rounded-full mr-4'),
  avatarView: tw.style('flex-col items-center ml-16'),
  detailsView: tw.style('flex-row items-center ml-16'),
};
