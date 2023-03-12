import React from 'react';
import { MarkdownEditor as PrimerMarkdownEditor } from '@primer/react/drafts';
import { ThemeProvider, theme } from '@primer/react';
import deepmerge from 'deepmerge';
import { MarkdownEditorProps as PrimerMarkdownEditorProps } from '@primer/react/lib-esm/drafts/MarkdownEditor';
import MarkdownIt from 'markdown-it';
import clsx from 'clsx';

import style from './markdownEditor.module.scss';

// custom colors here
const customTheme = deepmerge(theme, {});

const markdownBody = style['markdown-body'];
const markdownBodyDark = style['markdown-body-dark'];
const md = new MarkdownIt({ html: true });

export type MarkdownEditorProps = Partial<PrimerMarkdownEditorProps> & {
  value: string,
  onChange: (newMarkdown: string) => void,
  isDarkTheme: boolean,
  label?: string,
  isRequired?: boolean,
};

const MarkdownEditor = (props: MarkdownEditorProps) => {
  const renderMarkdown = async (markdown: string) =>
    `<div class="${clsx(markdownBody, props.isDarkTheme && markdownBodyDark)}">${md.render(markdown)}</div>`;

  return (
      <ThemeProvider theme={customTheme} colorMode={props.isDarkTheme ? 'dark' : 'light'}>
          <PrimerMarkdownEditor {...props} onRenderPreview={renderMarkdown}>
              <PrimerMarkdownEditor.Label>
                  <span className={style.label}>
                      {props.label}
                      {props.isRequired && <span className={style.required}>*</span>}
                  </span>
              </PrimerMarkdownEditor.Label>
          </PrimerMarkdownEditor>
      </ThemeProvider>
  );
};

export default MarkdownEditor;