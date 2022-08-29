import React, {FC} from 'react';
import {Text, View} from 'react-native';
// import { Wrapper } from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

export default Home;
