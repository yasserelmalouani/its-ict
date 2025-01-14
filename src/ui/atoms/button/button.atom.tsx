import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
  children,
  disabled,
  onPress,
  title,
}: {
  children: ReactElement;
  disabled?: boolean;
  onPress: () => void;
  title?: string;
}) => {
  return (
    <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
      {title ? <Text style={styles.buttonText}>{title}</Text> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#112341',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
