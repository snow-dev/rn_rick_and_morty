interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Result {
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
  url: string;
  created: string;
}

export interface Character {
  info: Info;
  results: Result[];
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
}
