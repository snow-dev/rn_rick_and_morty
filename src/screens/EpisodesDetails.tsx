import React, {useEffect} from 'react';

import {ScrollView, Text, View} from 'react-native';
import SafeAreaViewContainer from '../elements/SafeAreaContainer';
import ViewCard from '../elements/ViewCard';
import {Character, EpisodeDetailsScreenProps} from '../utils/types';
import DetailRow from '../elements/DetailRow';
import {
  useGetCharactersByIdsQuery,
  useGetEpisodeQuery,
} from '../services/character';

export type Props = {
  id: string;
};

const EpisodesDetails = (props: EpisodeDetailsScreenProps) => {
  const [stringChars, setStringChars] = React.useState<string>('');

  const {
    data: episode,
    isLoading,
    isError,
  } = useGetEpisodeQuery(props.route.params.id!, {
    skip: props.route.params.id === null,
  });

  useEffect(() => {
    if (!episode) {
      return;
    }
    episode.characterIds.map((character: {id: number}) => {
      setStringChars(id => id + character.id + ',');
    });
  }, [episode]);

  const {data: characters} = useGetCharactersByIdsQuery(stringChars, {
    skip: stringChars === '',
  });

  return (
    <SafeAreaViewContainer>
      <ViewCard>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Something went worn, try again!</Text>}
        {episode && (
          <ViewCard>
            <Text>Episodes Details</Text>
            <DetailRow title="Emitted:" value={episode.air_date} />
            <DetailRow title="Episode:" value={episode.episode} />
            <DetailRow title="Name:" value={episode.name} />
            <DetailRow value="Characters" />
            <ScrollView>
              <View>
                {characters &&
                  characters.map((character: Character, index: number) => (
                    <Text key={index}>{character.name}</Text>
                  ))}
                {/*<Grid onPress={() => null} episodes={characters} />*/}
              </View>
            </ScrollView>
          </ViewCard>
        )}
      </ViewCard>
    </SafeAreaViewContainer>
  );
};

export default EpisodesDetails;
