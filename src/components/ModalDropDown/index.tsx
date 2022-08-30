/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-return-assign */
import React from 'react';
import {
  Avatar,
  Button,
  Content,
  Label,
  Line,
  ModalContainer,
  Text,
  TextButton,
} from './styles';

type Props = {
  refComponent: any;
  dataUser?: Partial<any>;
};
const ModalDropDown: React.FC<Props> = ({refComponent, dataUser}) => {
  return (
    <ModalContainer ref={refComponent} openDuration={250}>
      <Avatar source={{uri: dataUser?.picture?.large}} />

      <Content>
        <Line>
          <Label>Nome: </Label>
          <Text>
            {dataUser?.name?.first} {dataUser?.name?.last}
          </Text>
        </Line>

        <Line>
          <Label>EMAIL: </Label>
          <Text>{dataUser?.email}</Text>
        </Line>

        <Line>
          <Label>GENERO: </Label>
          <Text>{dataUser?.gender}</Text>
        </Line>

        <Line>
          <Label>DATA DE NASC.: </Label>
          <Text>{dataUser?.dob?.date}</Text>
        </Line>

        <Line>
          <Label>TELEFONE: </Label>
          <Text>{dataUser?.phone}</Text>
        </Line>

        <Line>
          <Label>NACIONALIDADE: </Label>
          <Text>{dataUser?.nat}</Text>
        </Line>

        <Line>
          <Label>ENDEREÇO: </Label>

          <Text>
            {dataUser?.location?.street?.name},
            {dataUser?.location?.street?.number},
            {dataUser?.location?.street?.city}-
            {dataUser?.location?.street?.state}
          </Text>
        </Line>

        <Line>
          <Label>ID: </Label>

          <Text>{dataUser?.login?.uuid}</Text>
        </Line>

        <Button onPress={() => refComponent.current.close()}>
          <TextButton>Favoritar</TextButton>
        </Button>
      </Content>
    </ModalContainer>
  );
};

export default ModalDropDown;
