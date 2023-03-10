import {SafeAreaView, Text, View} from 'react-native';
import Grid from '../elements/Grid';
import React from 'react';
import {EpisodesScreenProps} from '../services/types';
import tw from 'twrnc';

const EpisodesGrid = (props: EpisodesScreenProps): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textTitle}>
          List of chapters where character appears
        </Text>
        <Text style={styles.textSubtitle}>(Press for details) </Text>
        <View style={styles.container}>
          <Grid episodes={props.route.params.episodes} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EpisodesGrid;

const styles = {
  textTitle: tw.style(
    'text-base text-blue-800 dark:text-gray-200 m-4 justify-left',
  ),
  textSubtitle: tw.style('text-sm text-blue-400 dark:text-gray-200 ml-4 mt--4'),
  container: tw.style('border-2 border-gray-200 rounded-lg p-2 m-2'),
};
