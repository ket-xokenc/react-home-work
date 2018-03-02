import React from 'react';

export default function withDropDown(itemsList) {
  return function(Component) {
    class WithDropDown extends React.Component {
      render() {
        return (
          <div id="autocomplete_result">
            {itemsList.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        );
      }
    }
    return WithDropDown;
  };
}
