import React, { Fragment } from 'react';
import withDropDown from '../../hocs/withDropDown';
import withItems from '../../hocs/withItems';

import './style.css';

function Input({ value, onInput, onChange }) {
  return (
    <Fragment>
      <p>
        Try typing <em>draw</em> or <em>fill</em>
      </p>
      <input
        id="autocomplete"
        type="text"
        onInput={onInput}
        onChange={onChange}
      />
    </Fragment>
  );
}
export default withItems(withDropDown)(Input);
