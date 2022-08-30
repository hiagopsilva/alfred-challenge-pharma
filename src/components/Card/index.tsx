import React, {FC} from 'react';
import {Avatar, ContentCard, Text, Wrapper} from './styles';

type Props = {
  item: any;
  handlePress: (values: any) => void;
};

const Card: FC<Props> = ({item, handlePress}) => {
  return (
    <Wrapper key={item.login.uuid} onPress={() => handlePress(item)}>
      <Avatar source={{uri: item.picture.large}} />
      <ContentCard>
        <Text>
          {item.name.title} {item.name.first} {item.name.last}
        </Text>
        <Text>{item.gender}</Text>
        <Text>
          {item.location.city} - {item.location.state}
        </Text>
      </ContentCard>
    </Wrapper>
  );
};

export default Card;
