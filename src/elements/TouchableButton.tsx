import {Text, TouchableHighlight} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

export interface TouchableButtonProps {
  title: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

const TouchableButton = ({title, variant, onPress}: TouchableButtonProps) => {
  const textStyle = variant === 'primary' ? 'primaryText' : 'secondaryText';
  const touchableHover =
    variant === 'primary' ? 'touchableHoverPrimary' : 'touchableHoverSecondary';

  return (
    <TouchableHighlight
      underlayColor={styles[touchableHover]}
      style={styles[variant]}
      onPress={() => onPress()}>
      <Text style={styles[textStyle]}>{title}</Text>
    </TouchableHighlight>
  );
};

export default TouchableButton;

const styles = {
  touchable: tw.style(
    'bg-rickPink-200 pl-3 pr-4 rounded-xl text-rickOrange-800',
  ),

  primary: tw.style('bg-rickGreen-500 p-2 rounded-xl text-color-rickGreen-300'),
  primaryText: tw.style('text-rickBlueGray-700 text-lg  text-right'),
  touchableHoverPrimary: tw.color('rickGreen-700 opacity-50 cursor-pointer'),

  secondary: tw.style('bg-rickPink-200 pl-3 pr-4 rounded-xl text-rickBlue-800'),
  secondaryText: tw.style('text-rickOrange-600 text-lg  text-right'),
  touchableHoverSecondary: tw.color('rickPink-200 opacity-50 cursor-pointer'),
};
