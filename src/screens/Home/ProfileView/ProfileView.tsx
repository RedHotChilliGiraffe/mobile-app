import {useEffect} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../../stores/Auth';

const ProfileView: React.FC = () => {
  const getProfileData = useAuthStore((state) => state.getProfileData);
  const {username, email, phone} = useAuthStore((state) => state.userData);

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <View>
      <Text>{username}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </View>
  );
};

export default ProfileView;
