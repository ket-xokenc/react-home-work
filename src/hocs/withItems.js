import React from 'react';
import itemsList from '../stubs/itemsList';

const searchItems = event => {
  const searchText = event.target.value;
  let results = [];
  const searchString = new RegExp('^' + searchText, 'i');
  for (let i = 0; i < itemsList.length; i++) {
    if (searchString.test(itemsList[i])) {
      results.push(itemsList[i]);
    }
  }
  console.log(results);
  return results;
};

export default function withItems(Component) {
  function WithItems() {
    return <Component onInput={searchItems} />;
  }
  return WithItems;
}
