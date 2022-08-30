import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WrapperSearch = styled.View`
  width: 100%;
  height: 90px;
`;

export const WrapperInput = styled.View`
  width: 100%;
  height: 52px;

  margin: auto 0;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid gray;
`;

export const TextInput = styled.TextInput`
  background-color: #fff;
  flex: 1;

  padding: 0 8px;
  border-radius: 4px;
`;

export const Icon = styled.View`
  width: 52px;
  height: 50px;

  margin-left: auto;
  background-color: gray;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const WrapperList = styled.FlatList`
  flex: 1;

  padding: 0 16px;
`;

export const Card = styled.View`
  width: 100%;

  padding: 8px 0;
  margin-bottom: 18px;

  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 50px;

  /* background-color: gray; */
`;

export const ContentCard = styled.View`
  width: 65%;

  margin-left: 16px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
