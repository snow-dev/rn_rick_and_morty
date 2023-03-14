import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import tw from '../lib/tailwind';

import {useGetCharactersQuery} from './services/character';
import {DetailScreenNavigationProp} from './services/types';
import {useNavigation} from '@react-navigation/native';
import ImageEl from './elements/Image';
import TouchableButton from './elements/TouchableButton';
import DetailRow from './elements/DetailRow';
import SafeAreaViewContainer from './elements/SafeAreaContainer';

function App(): JSX.Element {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const {data, error, isLoading} = useGetCharactersQuery();

  return (
    <SafeAreaViewContainer>
      <View style={styles.header}>
        <Image
          source={require('./../resources/logo.png')}
          style={styles.headerImage}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>Something went worn, try again!</Text>}
          {data?.results.map((item, index) => (
            <View key={index} style={styles.card}>
              <ImageEl variant="avatar" source={item.image} />

              <DetailRow value={item.name} variant="home" />

              <TouchableButton
                title={'+'}
                onPress={() => navigation.navigate('Details', {id: item.id})}
                variant="home"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaViewContainer>
  );
}
export default App;

const styles = {
  header: tw.style('flex-row items-center justify-center p-2 bg-rickGreen-500'),
  headerImage: tw.style('dark:text-gray-100 w-100% h-100px m-4'),
  card: tw.style(
    'bg-rickGreen-200 border-2 border-gray-200 rounded-lg p-3 ml-3 mr-3 mb-3 flex-row items-center justify-around',
  ),
  textName: tw.style('text-lg font-bold text-gray-800 dark:text-gray-200'),
  textStats: tw.style('text-sm text-blue-800 dark:text-blue-200 ml-4'),
  avatar: tw.style('w-16 h-16 rounded-full'),
  detailsView: tw.style('flex-row items-center ml-16'),
};
