/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import request from '../../services';

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
  const [dataUsers, setDataUsers] = useState<any[]>();
  const [loading, setLoading] = useState(false);

  const fetchDataUsers = async () => {
    setLoading(true);
    const response = await request.get(`/?page=${1}&results=${50}`);

    setDataUsers(response.data.results);

    console.log(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  return (
    <>
      {!loading && (
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
            // data={[1, 2, 3, 4, 5, 6]}
            data={dataUsers}
            renderItem={({item}: any) => (
              <Card>
                <Avatar source={{uri: item.picture.large}} />
                <ContentCard>
                  <Text>{item.name.title}</Text>
                  <Text>{item.name.first}</Text>
                  <Text>{item.name.last}</Text>
                </ContentCard>
              </Card>
            )}
            onEndReachedThreshold={0.1}
            onEndReached={() => console.log('ok')}
            ListFooterComponent={
              <ActivityIndicator size="large" color="#0000ff" />
            }
          />
        </Container>
      )}
    </>
  );
};

export default Home;
