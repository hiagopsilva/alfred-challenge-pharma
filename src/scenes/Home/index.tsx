/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
import React, {FC, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import ModalDropDown from '../../components/ModalDropDown';
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
  const [dataUsers, setDataUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [dataUser, setDataUser] = useState<Partial<any>>({});

  const refComponent = useRef<any>();

  const fetchDataUsers = async () => {
    setLoading(true);
    const response = await request.get(`/?page=${page}&results=${50}`);

    setDataUsers(response.data.results);
    setPage(prevState => prevState + 1);

    setLoading(false);
  };

  const fetchMoreUsers = async () => {
    const response = await request.get(`/?page=${page}&results=${50}`);

    setDataUsers([...dataUsers, ...response.data.results]);
    setPage(prevState => prevState + 1);
  };

  const handlePress = (value: any) => {
    setDataUser(value);
    refComponent.current.open();
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Container>
          <ModalDropDown refComponent={refComponent} dataUser={dataUser} />
          <WrapperList
            ListHeaderComponent={() => (
              <WrapperSearch>
                <WrapperInput>
                  <TextInput placeholder="Pesquisar..." />
                  <Icon />
                </WrapperInput>
              </WrapperSearch>
            )}
            data={dataUsers}
            renderItem={({item}: any) => (
              <Card key={item.login.uuid} onPress={() => handlePress(item)}>
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
              </Card>
            )}
            onEndReachedThreshold={0.1}
            onEndReached={fetchMoreUsers}
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
