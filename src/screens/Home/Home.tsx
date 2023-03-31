import {Link} from 'expo-router';
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const Home: React.FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <Link href="/login">
        <Button mode="contained">Login</Button>
      </Link>
      <Button mode="contained">Register</Button>
    </View>
  );
};

export default Home;
