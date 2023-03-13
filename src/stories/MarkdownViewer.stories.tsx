import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import { MarkdownViewer } from '../index';

import { dummyMarkdown } from './content';

const meta: Meta = {
  title: 'User Inputs/Markdown Viewer',
  component: MarkdownViewer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return ( // @ts-ignore
      <MarkdownViewer {...args} isDarkTheme={useDarkMode()} />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: dummyMarkdown,
};