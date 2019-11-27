import React from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Field,
  Label,
  TextInput,
  TextArea,
  Actions,
  SubmitButton,
  ButtonPost,
  ButtonText,
} from './styles';

export default function Post() {
  return (
    <Container>
      <Field>
        <TextArea
          multiline={true}
          numberOfLines={3}
          textAlignVertical="top"
          placeholder="Digite aqui sua dúvida ou comentário..."
        />
      </Field>
      <Actions>
        <SubmitButton onPress={() => Alert.alert('submit')}>
          <ButtonText size={20}>Publicar</ButtonText>
        </SubmitButton>
      </Actions>
    </Container>
  );
}
