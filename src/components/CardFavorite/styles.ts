import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)`
  width: 100%;
  padding-horizontal: 10px;
  padding-vertical: 25px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
`;

export const Text = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
`;

export const Image = styled.Image.attrs({
  width: 50,
  height: 50,
})``;

export const WrapperDetails = styled.View`
  align-items: flex-end;
`;

export const TextTimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
`;

export const TextTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
`;

export const ButtonRemove = styled(RectButton)`
  width: 70px;
  height: 70px;

  background-color: black;

  margin: auto;
`;
