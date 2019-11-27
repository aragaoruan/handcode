import React from 'react';
import Card from './Card';

import navigation from '../../config/NavigationService';

import {ListItem} from './styles';

export default function List({data, navigation, namepage}) {
  console.log(namepage);

  function handleRefreshRepository() {
    navigation.navigate(namepage);
  }

  return (
    <ListItem
      keyboardShouldPersistTaps="handled"
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <Card data={item} next={() => handleRefreshRepository()} />
      )}
    />
  );
}
