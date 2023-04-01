import {Text} from 'react-native';

const ErrorText: React.FC<{children: string}> = ({children}) => (
  <Text style={{color: 'red'}}>{children}</Text>
);

export default ErrorText;
