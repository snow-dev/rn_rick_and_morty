import {Text, TouchableHighlight} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

export interface TouchableButtonProps {
  title: string;
  onPress: () => void;
}

const TouchableButton = ({title, onPress}: TouchableButtonProps) => {
  return (
    <TouchableHighlight
      underlayColor={styles.touchableHover}
      style={styles.touchable}
      onPress={() => onPress()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

export default TouchableButton;

const styles = {
  touchable: tw.style(
    'bg-rickPink-200 pl-3 pr-4 rounded-xl text-rickOrange-800',
  ),
  touchableHover: tw.color('rickPink-200 opacity-50'),
  text: tw.style('text-rickOrange-600 text-lg  text-right'),
};
