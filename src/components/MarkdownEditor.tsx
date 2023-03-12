import React from 'react';
import { MarkdownEditor as PrimerMarkdownEditor } from '@primer/react/drafts';
import { ThemeProvider } from '@primer/react';
import { MarkdownEditorProps as PrimerMarkdownEditorProps } from '@primer/react/lib-esm/drafts/MarkdownEditor';

import markdownToHTML from '../utils/markdownToHTML';
import style from '../style.module.scss';

export type MarkdownEditorProps = Partial<PrimerMarkdownEditorProps> & {
  value: string,
  onChange: (newMarkdown: string) => void,
  isDarkTheme: boolean,
  label?: string,
  isRequired?: boolean,
};

const MarkdownEditor = (props: MarkdownEditorProps) => {
  return (
      <ThemeProvider colorMode={props.isDarkTheme ? 'dark' : 'light'}>
          <PrimerMarkdownEditor {...props} onRenderPreview={async markdown => markdownToHTML(markdown, props.isDarkTheme)}>
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