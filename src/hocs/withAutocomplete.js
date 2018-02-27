import React from 'react';

const listItems = ['ETH', 'ETC', 'BTC', 'fillLine', 'fillCircle', 'dom'];

export default function withAutocomplete(Component) {
  class WithAutocomplete extends React.Component {
    constructor(props) {
      super(props);

      this.state = { ...props };
    }

    onChange = event => {
      this.setState({
        value: event.target.value,
      });
    };

    getItems = event => {
      // get input text
      const searchText = event.target.value;
      const promise = Promise.resolve(searchText).then(
        console.log(searchItems(searchText)),
        function(value) {
          // on error
        }
      );
    };

    render() {
      return (
        <Component
          onChange={this.onChange}
          onInput={this.getItems}
          value={event.target.value}
        />
      );
    }
  }
  return WithAutocomplete;
}

function searchItems(item) {
  let results = [];
  const searchString = new RegExp('^' + item, 'i');
  for (let i = 0; i < listItems.length; i++) {
    if (searchString.test(listItems[i])) {
      results.push(listItems[i]);
    }
  }
  return results;
}
