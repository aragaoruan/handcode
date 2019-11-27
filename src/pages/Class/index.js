import React from 'react';

import {TextInput} from 'react-native';

import {
  Container,
  Description,
  Border,
  Button,
  NameButton,
  Glosario,
  NameGlosario,
  TitleNameGlosario,
  TitleGlosario,
  ButtonGlosario,
  ContainerGlosario,
} from './styles';

const page = 'AULA 1';
export function ClassNavigationOptions() {
  return {
    headerTitle: page,
  };
}

export default function Class({navigation}) {
  function UselessTextInput(props) {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  }

  function pageImage() {
    navigation.navigate('Image');
  }

  return (
    <Container>
      <Description>
        1 – pegar o chiclete 2 – retirar o papel 3 – mascar o chiclete 4 – jogar
        o papel no lixo 5 – jogar o chiclete no lixo
      </Description>

      <Border>
        <UselessTextInput multiline numberOfLines={4} />
      </Border>

      <Button>
        <NameButton>Enviar</NameButton>
      </Button>

      <Glosario>
        <TitleGlosario>Glosario</TitleGlosario>

        <ContainerGlosario>
          <NameGlosario>
            <TitleNameGlosario>echo :</TitleNameGlosario>
            print na tela
          </NameGlosario>
          <ButtonGlosario onPress={() => pageImage()}>
            <NameButton>Sinal</NameButton>
          </ButtonGlosario>
        </ContainerGlosario>
      </Glosario>

      <Button>
        <NameButton>Proximo</NameButton>
      </Button>
    </Container>
  );
}
