import React from 'react';
import Card from './Card';

import {ListItem} from './styles';

export default function List({data}) {
  return (
    <ListItem
      keyboardShouldPersistTaps="handled"
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <Card data={item} />}
    />
  );
}
