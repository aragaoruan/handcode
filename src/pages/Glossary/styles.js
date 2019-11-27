import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Title = styled.Text.attrs({
  placeholderTextColor: colors.primary.grayTextColor,
})`
  color: ${colors.primary.blackTextColor};
`;

export const Search = styled.TextInput`
  font-size: 18px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const CheckSignal = styled.TouchableHighlight`
  background-color: ${colors.primary.darkColor};
  width: 30%;
  border-radius: 5px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: space-around;
`;

export const CheckSignalText = styled.Text`
  font-size: 14px;
  padding: 14px;
  color: white;
  text-align: center;
`;

export const Word = styled.Text`
  font-size: 20px;
  color: gray;
  text-align: center;
  padding: 10px;
`;
