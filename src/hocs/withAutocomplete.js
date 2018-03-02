import React from 'react';

// const listItems = ['ETH', 'ETC', 'BTC', 'fillLine', 'fillCircle', 'dom'];

// export default function withAutocomplete(Component) {
//   class WithAutocomplete extends React.Component {
//     constructor(props) {
//       super(props);

//       // this.state = { ...props };
//     }

//     onChange = event => {
//       this.setState({
//         value: event.target.value,
//       });
//     };

//     getItems = event => {
//       const searchText = event.target.value;
//       const items = this.searchItems(searchText);
//       // MAIN LOGIC
//       return Promise.resolve(items);
//     };

//     render() {
//       return (
//         <Component
//           value={this.onChange}
//           onChange={this.onChange}
//           onInput={this.getItems}
//         />
//       );
//     }
//   }
//   return WithAutocomplete;
// }

// function searchItems(item) {
//   let results = [];
//   const searchString = new RegExp('^' + item, 'i');
//   for (let i = 0; i < listItems.length; i++) {
//     if (searchString.test(listItems[i])) {
//       results.push(listItems[i]);
//     }
//   }
//   return results;
// }
