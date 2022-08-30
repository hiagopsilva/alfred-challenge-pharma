/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Avatar,
  Card,
  Container,
  ContentCard,
  Icon,
  Text,
  TextInput,
  WrapperInput,
  WrapperList,
  WrapperSearch,
} from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <Container>
      <WrapperList
        ListHeaderComponent={() => (
          <WrapperSearch>
            <WrapperInput>
              <TextInput />
              <Icon />
            </WrapperInput>
          </WrapperSearch>
        )}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => (
          <Card>
            <Avatar />
            <ContentCard>
              <Text>Titulo 1</Text>
              <Text>Titulo 2</Text>
              <Text>Titulo 3</Text>
            </ContentCard>
          </Card>
        )}
        onEndReachedThreshold={0.1}
        onEndReached={() => console.log('ok')}
        ListFooterComponent={<ActivityIndicator size="large" color="#0000ff" />}
      />
    </Container>
  );
};

export default Home;
