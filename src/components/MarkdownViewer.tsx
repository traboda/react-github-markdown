import React, { useEffect, useState } from 'react';
import { MarkdownViewer as PrimerMarkdownViewer } from '@primer/react/drafts';
import { SSRProvider } from '@primer/react';

import markdownToHTML from '../utils/markdownToHTML';
import WithSyntaxHighlighting from '../utils/WithSyntaxHighlighting';

export type MarkdownViewerProps = {
  value: string,
  isDarkTheme: boolean,
  openLinksInNewTab?: boolean,
};

const MarkdownViewer = (props: MarkdownViewerProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(markdownToHTML(props.value, props.isDarkTheme));
  }, [props.value]);

  return (
      <WithSyntaxHighlighting isDarkTheme={props.isDarkTheme}>
          <SSRProvider>
              <PrimerMarkdownViewer
                  {...props}
                  openLinksInNewTab={props?.openLinksInNewTab}
                  dangerousRenderedHTML={{ __html: content }}
              />
          </SSRProvider>
      </WithSyntaxHighlighting>
  );
};

export default MarkdownViewer;