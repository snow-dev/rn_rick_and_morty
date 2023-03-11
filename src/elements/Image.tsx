import React from 'react';
import tw from 'twrnc';
import {Image} from 'react-native';

interface ImageProps {
  source: string;
  variant: 'avatar' | 'full';
}

function ImageEl({variant, source}: ImageProps): JSX.Element {
  return (
    <Image
      style={variant === 'avatar' ? styles.avatar : styles.full}
      source={{uri: source}}
    />
  );
}

export default ImageEl;

const styles = {
  avatar: tw.style('w-16 h-16 rounded-full mr-4'),
  full: tw.style('w-full h-100 rounded-lg'),
};
