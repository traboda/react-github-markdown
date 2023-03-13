import React, { DOMAttributes, useEffect, useState } from 'react';
import { MarkdownViewer as PrimerMarkdownViewer } from '@primer/react/drafts';
import { MarkdownViewerProps as PrimerMarkdownViewerProps } from '@primer/react/lib-esm/drafts/MarkdownViewer/MarkdownViewer';
import { SSRProvider } from '@primer/react';

import markdownToHTML from '../utils/markdownToHTML';
import WithSyntaxHighlighting from '../utils/WithSyntaxHighlighting';

type DangerousHtmlContainer = Required<DOMAttributes<unknown>>['dangerouslySetInnerHTML'];
export type MarkdownViewerProps = PrimerMarkdownViewerProps & {
  value: string,
  isDarkTheme: boolean,
  dangerousRenderedHTML?: DangerousHtmlContainer,
};

const MarkdownViewer = (props: MarkdownViewerProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(markdownToHTML(props.value, props.isDarkTheme));
  }, [props.value]);

  return (
      <WithSyntaxHighlighting isDarkTheme={props.isDarkTheme}>
          <SSRProvider>
              <PrimerMarkdownViewer {...props} dangerousRenderedHTML={{ __html: content }} />
          </SSRProvider>
      </WithSyntaxHighlighting>
  );
};

export default MarkdownViewer;