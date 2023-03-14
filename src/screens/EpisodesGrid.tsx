import {Text} from 'react-native';
import Grid from '../elements/Grid';
import React from 'react';
import {EpisodesScreenProps} from '../services/types';
import tw from './../../lib/tailwind';
import SafeAreaViewContainer from '../elements/SafeAreaContainer';
import ViewCard from '../elements/ViewCard';

const EpisodesGrid = (props: EpisodesScreenProps): JSX.Element => {
  return (
    <SafeAreaViewContainer>
      <ViewCard>
        <Text style={styles.textTitle}>
          List of chapters where character appears
        </Text>
        <Text style={styles.textSubtitle}>(Press for details) </Text>
        <Grid episodes={props.route.params.episodes} />
      </ViewCard>
    </SafeAreaViewContainer>
  );
};

export default EpisodesGrid;

const styles = {
  textTitle: tw.style('text-base text-rickOrange-600 dark:text-gray-200 m-4'),
  textSubtitle: tw.style(
    'text-sm text-rickPink-400 dark:text-gray-200 ml-4 mt--4',
  ),
};
