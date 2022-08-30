/* eslint-disable react/jsx-props-no-spreading */
import React, {FC} from 'react';
import {Animated, View} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Card from '../Card';

import {ButtonRemove} from './styles';

interface Props extends RectButtonProps {
  data: any;
}

const CardFavorite: FC<Props> = ({data}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          {/* <View> */}
          <ButtonRemove onPress={() => console.log('botao remover')} />
          {/* </View> */}
        </Animated.View>
      )}>
      <Card item={data} handlePress={() => console.log('ok')} />
    </Swipeable>
  );
};

export default CardFavorite;
