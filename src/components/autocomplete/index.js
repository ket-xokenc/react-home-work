import React, { Fragment } from 'react';
import withAutocomplete from '../../hocs/withAutocomplete';
import './style.css';

function Autocomplete({ value, onInput, onChange }) {
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
      <div id="autocomplete_result" style={{ display: 'none' }} />
    </Fragment>
  );
}

export default withAutocomplete(Autocomplete);
