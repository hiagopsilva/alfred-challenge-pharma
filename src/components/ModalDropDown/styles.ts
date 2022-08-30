import RBSheet from 'react-native-raw-bottom-sheet';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const ModalContainer = styled(RBSheet).attrs({
  height: 600,
})`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;

  border-radius: 90px;

  margin: 20px auto 0;

  background-color: gray;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 16px;

  padding: 0 16px 40px;
`;

export const Line = styled.View`
  width: 100%;

  flex-direction: row;
  margin-bottom: 4px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;

  text-transform: capitalize;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  width: 85%;
  position: relative;

  text-transform: capitalize;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: black;

  margin: auto auto 0;

  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
