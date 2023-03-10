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
  episode?: string[];
  episodes?: EpisodeItem[];
  url: string;
  created: string;
}

export interface Result extends Character {}

export interface Characters {
  info: Info;
  results: Result[];
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export type RootStackParamList = {
  App: undefined;
  Details: {id: number};
  Episodes: {
    episodes?: EpisodeItem[];
  };
};

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export type EpisodesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Episodes'
>;

export type EpisodesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Episodes'
>;
