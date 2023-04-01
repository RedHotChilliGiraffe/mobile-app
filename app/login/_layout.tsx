import {Stack} from 'expo-router';
import {useTheme} from 'react-native-paper';

export default function Layout() {
  const {colors} = useTheme();

  return (
    <Stack screenOptions={{contentStyle: {backgroundColor: colors.background}}}>
      <Stack.Screen
        name="index"
        options={{
          presentation: 'containedTransparentModal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
