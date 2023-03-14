import React from 'react';
import { SSRProvider, ThemeProvider } from '@primer/react';
import { MarkdownEditor as PrimerMarkdownEditor } from '@primer/react/drafts';
import { FileType } from '@primer/react/lib-esm/drafts/hooks/useUnifiedFileSelect';

import WithSyntaxHighlighting from '../utils/WithSyntaxHighlighting';
import markdownToHTML from '../utils/markdownToHTML';
import style from '../style.module.scss';
import EMOJIS from '../utils/emojis';

import ToolbarButtons, { ToolbarButton } from './MarkdownToolbar';

export type MarkdownEditorProps = {
  value: string,
  onChange: (newMarkdown: string) => void,
  isDarkTheme: boolean,
  label?: string,
  name?: string,
  isRequired?: boolean,
  isDisabled?: boolean,
  placeholder?: string,
  enableEmojiSuggestions?: boolean,
  viewMode?: 'preview' | 'edit'
  monospace?: boolean,
  fullHeight?: boolean,
  minLines?: number,
  maxLines?: number,
  onUploadFile?: (file: File) => Promise<{
    url: string;
    file: File;
  }>,
  maxLength?: number,
  acceptedFileTypes?: Array<FileType>,
  toolbarButtons?: ToolbarButton[],
};

const MarkdownEditor = (props: MarkdownEditorProps) => {

  const [viewMode, setViewMode] = React.useState<'preview' | 'edit'>(props.viewMode ?? 'edit');

  return (
      <ThemeProvider colorMode={props.isDarkTheme ? 'dark' : 'light'}>
          <WithSyntaxHighlighting isDarkTheme={props.isDarkTheme}>
              <SSRProvider>
                  <PrimerMarkdownEditor
                      {...props}
                      name={props.name}
                      disabled={props.isDisabled}
                      required={props.isRequired}
                      placeholder={props.placeholder}
                      emojiSuggestions={props.enableEmojiSuggestions ? EMOJIS : undefined}
                      value={props.value}
                      onChange={props.onChange}
                      viewMode={viewMode}
                      onChangeViewMode={setViewMode}
                      onRenderPreview={async markdown => markdownToHTML(markdown, props.isDarkTheme)}
                      fullHeight={props.fullHeight}
                      minHeightLines={props.minLines ?? 5}
                      maxHeightLines={props.maxLines ?? 20}
                      monospace={props.monospace}
                      onUploadFile={props.onUploadFile}
                      maxLength={props.maxLength}
                      acceptedFileTypes={props.acceptedFileTypes}
                  >
                      {props?.label && (
                      <PrimerMarkdownEditor.Label>
                          <span className={style.label}>
                              {props.label}
                              {props.isRequired && <span className={style.required}>*</span>}
                          </span>
                      </PrimerMarkdownEditor.Label>
                      )}
                      <PrimerMarkdownEditor.Toolbar>
                          <ToolbarButtons buttons={props?.toolbarButtons ?? []} />
                      </PrimerMarkdownEditor.Toolbar>
                  </PrimerMarkdownEditor>
              </SSRProvider>
          </WithSyntaxHighlighting>
      </ThemeProvider>
  );
};

export default MarkdownEditor;