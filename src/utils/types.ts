import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export interface EpisodeItem {
  id: number;
  url: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  episodes: EpisodeItem[];
  url: string;
  created: string;
}

export interface Result extends Character {}

export interface Characters {
  info: Info;
  results: Result[];
}

interface EpisodeIds {
  id: number;
}
export interface Episode {
  air_date: string;
  characters: string[];
  characterIds: EpisodeIds[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export type RootStackParamList = {
  App: undefined;
  Details: {id: number};
  Episodes: {
    episodes?: EpisodeItem[];
  };
  EpisodeDetails: {id: number};
};
/**
 * Character Detail types
 * */
export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

/**
 * Episodes types
 * */
export type EpisodesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Episodes'
>;
export type EpisodesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Episodes'
>;

/**
 * Episode details types
 * */
export type EpisodeDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EpisodeDetails'
>;
export type EpisodeDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EpisodeDetails'
>;
