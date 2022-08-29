import React, {FC} from 'react';
import {Text, View} from 'react-native';
// import { Wrapper } from './styles';

type Props = {};

const Settings: FC<Props> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};

export default Settings;
