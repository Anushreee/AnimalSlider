import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from './Accordion';

storiesOf('Accordion', module).add('default', () => {
  const data = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework'
    },
    {
      title: 'why use React?',
      content: 'React is a favorite JS library among engineers'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components'
    }
  ]
  return <Accordion items={data} />
});