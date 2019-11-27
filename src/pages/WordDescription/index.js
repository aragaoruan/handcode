import React from 'react';
import {View, Text, Image} from 'react-native';

import {Container, ImageDescription, Word, Description} from './styles';

export function WordDescriptionNavigationOptions() {
  return {
    headerTitle: 'Descricao da palavra',
  };
}

export function WordDescription() {
  return (
    <Container>
      <ImageDescription
        source={{
          uri:
            'https://3.bp.blogspot.com/-GBTiulVDn1c/VHy7AM0_-GI/AAAAAAAAB58/Obs9Vz4lk90/s1600/Feliz-Natalas.gif',
        }}
      />
      <Word>Palavra</Word>
      <Description>
        Aqui teremos uma breve descricao do significado da palavra e tal, aqui
        teremos uma breve descricao do significado da palavra e tal
      </Description>
    </Container>
  );
}
