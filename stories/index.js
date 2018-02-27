import React from 'react';
import { storiesOf } from '@storybook/react';
import '../src/components/autocomplete/style.css';

import Autocomplete from '../src/components/autocomplete';

storiesOf('Autocomplete', module).add('start component', () => (
  <Autocomplete />
));
