import React from 'react';
import {View} from 'react-native';
import {useAuthStore} from '../../stores/Auth';
import HomeLoginView from './HomeLoginView';
import HomeView from './HomeView';

const Home: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <View
      style={{
        paddingHorizontal: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      {isAuthenticated ? <HomeView /> : <HomeLoginView />}
    </View>
  );
};

export default Home;
