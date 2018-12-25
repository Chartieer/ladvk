import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Chip } from './chip.js';


storiesOf('Chip', module)
  .add('with text', () => <Chip >Hello on</Chip>);

