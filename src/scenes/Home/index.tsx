import React, {FC} from 'react';

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
      <WrapperSearch>
        <WrapperInput>
          <TextInput />
          <Icon />
        </WrapperInput>
      </WrapperSearch>

      <WrapperList>
        <Card>
          <Avatar />
          <ContentCard>
            <Text>Hiago</Text>
            <Text>Hiago</Text>
            <Text>Hiago</Text>
          </ContentCard>
        </Card>
      </WrapperList>
    </Container>
  );
};

export default Home;
