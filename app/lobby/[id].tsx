import {usePathname, useRouter} from 'expo-router';
import {View} from 'react-native';
import Lobby from '../../src/screens/Lobby';

const LobbyPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const id = Number(pathname.split('/').pop());
  console.log(id);

  if (isNaN(id)) {
    router.replace('/');
    return null;
  }

  return <Lobby lobbyId={id} />;
};

export default LobbyPage;
