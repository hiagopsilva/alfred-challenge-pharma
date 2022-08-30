import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
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
`;

export const ContentCard = styled.View`
  width: 65%;

  margin-left: 16px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;

  text-transform: capitalize;
`;
