import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {DetailScreenProps} from '../services/types';
import {useGetCharacterByIdQuery} from '../services/character';

import tw from './../../lib/tailwind';

import ImageEl from '../elements/Image';
import TouchableButton from '../elements/TouchableButton';
import DetailRow from '../elements/DetailRow';
import {formatDate} from '../utils/utils';
import SafeAreaViewContainer from '../elements/SafeAreaContainer';
import ViewCard from '../elements/ViewCard';

function Details(props: DetailScreenProps): JSX.Element {
  const {data, error, isLoading} = useGetCharacterByIdQuery(
    props.route.params.id,
  );

  return (
    <SafeAreaViewContainer>
      <View>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Something went worn, try again!</Text>}
        {data && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ViewCard>
              <View style={tw`flex-row items-center`}>
                <ImageEl variant="full" source={data.image} />
              </View>

              <DetailRow title="Name" value={data.name} />
              <DetailRow title="Status" value={data.status} />
              <DetailRow title="Gender" value={data.gender} />
              <DetailRow title="Species" value={data.species} />
              <DetailRow title="Status" value={data.status} />
              {data.type && <DetailRow title="Type" value={data.type} />}
              <DetailRow title="Origin">
                <TouchableButton
                  title="Show Origin"
                  variant="secondary"
                  onPress={() => null}
                />
              </DetailRow>
              <DetailRow title={'Location'}>
                <TouchableButton
                  title={'Show Location'}
                  variant={'secondary'}
                  onPress={() => null}
                />
              </DetailRow>
              <DetailRow title={'Created'} value={formatDate(data.created)} />
              <DetailRow title={'Episodes'}>
                <TouchableButton
                  title="See episodes"
                  variant={'secondary'}
                  onPress={() =>
                    props.navigation.navigate('Episodes', {
                      episodes: data.episodes,
                    })
                  }
                />
              </DetailRow>
            </ViewCard>
          </ScrollView>
        )}
      </View>
    </SafeAreaViewContainer>
  );
}

export default Details;
