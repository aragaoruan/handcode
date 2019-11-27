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
} from './styles';

const page = 'NEW PAGE';
export function ClassNavigationOptions() {
  return {
    headerTitle: page,
  };
}

export default function Class() {
  function UselessTextInput(props) {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  }

  return (
    <Container>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic
      </Description>

      <Border>
        <UselessTextInput multiline numberOfLines={4} />
      </Border>

      <Button>
        <NameButton>Enviar</NameButton>
      </Button>

      <Glosario>
        <TitleGlosario>Glosario</TitleGlosario>

        <NameGlosario>
          <TitleNameGlosario>echo :</TitleNameGlosario> print na tela
        </NameGlosario>
        <NameGlosario>
          <TitleNameGlosario>echo :</TitleNameGlosario> print na tela
        </NameGlosario>
      </Glosario>

      <Button>
        <NameButton>Proximo</NameButton>
      </Button>
    </Container>
  );
}
