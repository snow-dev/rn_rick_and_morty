import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DetailScreenProps} from '../services/types';
import {useGetCharacterByIdQuery} from '../services/character';

import tw from './../../lib/tailwind';

import ImageEl from '../elements/Image';
import TouchableButton from '../elements/TouchableButton';

function Details(props: DetailScreenProps): JSX.Element {
  const {data, error, isLoading} = useGetCharacterByIdQuery(
    props.route.params.id,
  );

  return (
    <SafeAreaView>
      <View>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Something went worn, try again!</Text>}
        {data && (
          <ScrollView automaticallyAdjustContentInsets={true}>
            <View style={styles.containerView}>
              <View style={tw`flex-row items-center`}>
                <ImageEl variant="full" source={data.image} />
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Name:</Text>
                <Text style={styles.value}>{data.name}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Status:</Text>
                <Text style={styles.value}>{data.status}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Gender:</Text>
                <Text style={styles.value}>{data.gender}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Species:</Text>
                <Text style={styles.value}>{data.species}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Gender:</Text>
                <Text style={styles.value}>{data.gender}</Text>
              </View>

              {data.type && (
                <View style={styles.row}>
                  <Text style={styles.key}>Type:</Text>
                  <Text style={styles.value}>{data.type}</Text>
                </View>
              )}

              <View style={tw`flex-col`}>
                <View style={styles.row}>
                  <Text style={styles.key}>Origin:</Text>
                  <Text style={styles.value}>{data.origin.name}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.key}>URL:</Text>
                  <Text style={styles.value}>{data.origin.url}</Text>
                </View>
              </View>

              <View style={tw`flex-col`}>
                <View style={styles.row}>
                  <Text style={styles.key}>Location:</Text>
                  <Text style={styles.value}>{data.location.name}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.key}>URL:</Text>
                  <Text style={styles.value}>{data.location.url}</Text>
                </View>
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Created:</Text>
                <Text style={styles.value}>{data.created}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.key}>Episodes</Text>
                <TouchableButton
                  title="See episodes"
                  onPress={() =>
                    props.navigation.navigate('Episodes', {
                      episodes: data.episodes,
                    })
                  }
                />
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Details;

const styles = {
  containerView: tw.style('border-2 border-gray-200 rounded-lg p-2 m-2'),
  key: tw.style(
    'text-rickLightBlue-400 font-bold text-xl mr-2 text-left w-25%',
  ),
  value: tw.style('text-rickOrange-600 text-lg  text-right'),
  row: tw.style('flex-row items-space-between mt-2'),
  column: tw.style('flex-col'),
};
