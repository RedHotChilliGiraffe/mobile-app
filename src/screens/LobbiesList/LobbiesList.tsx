import {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import LobbyCard from '../../components/LobbyCard';
import {API} from '../../utils/api/api';
import authenticatedRequest from '../../utils/api/authenticatedRequest';
import {LobbyData} from '../../utils/api/types';

const LobbiesList: React.FC = () => {
  const [lobbies, setLobbies] = useState<Array<LobbyData>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await authenticatedRequest((token) =>
          API.getLobbiesList(token),
        );
        setLobbies(data);
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    };
    fetchData();
  }, []);

  const renderItem: ListRenderItem<LobbyData> = ({item}) => {
    return <LobbyCard {...item} />;
  };

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        paddingTop: 50,
      }}>
      <FlatList
        data={lobbies}
        renderItem={renderItem}
        keyExtractor={({id}) => String(id)}
      />
    </View>
  );
};

export default LobbiesList;
