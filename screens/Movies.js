import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Movies = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('Stack', { screen: 'Page3' })}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Movies</Text>
    </TouchableOpacity>
  );
};

export default Movies;
