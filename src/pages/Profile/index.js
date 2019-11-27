import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Title,
  AvatarArea,
  DataInfo,
  Row,
  Label,
  Value,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <AvatarArea>
        <Icon name="user-circle-o" size={200} />
        <Title>Olá Patrick!</Title>
      </AvatarArea>

      <DataInfo>
        <Row>
          <Label>Jornada</Label>
          <Value>Algoritmo</Value>
        </Row>
        <Row>
          <Label>Progressão</Label>
          <Value>10%</Value>
        </Row>
        <Row>
          <Label>Level</Label>
          <Value>7</Value>
        </Row>

        <Row>
          <Label>Experiência</Label>
          <Value>152xp</Value>
        </Row>
      </DataInfo>
    </Container>
  );
}
