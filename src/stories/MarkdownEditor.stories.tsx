import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import { MarkdownEditor } from '../index';

import { dummyMarkdown } from './content';

const meta: Meta = {
  title: 'User Inputs/Markdown Editor',
  component: MarkdownEditor,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [value, onChange] = useState(args.value);
  const isDarkTheme = useDarkMode();

  return ( // @ts-ignore
      <MarkdownEditor {...args} value={value} isDarkTheme={isDarkTheme} onChange={onChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'This is the label',
  value: dummyMarkdown,
};