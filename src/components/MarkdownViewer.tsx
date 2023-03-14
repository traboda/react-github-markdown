import React, { useEffect, useState } from 'react';
import { MarkdownViewer as PrimerMarkdownViewer } from '@primer/react/drafts';
import { SSRProvider, ThemeProvider } from '@primer/react';

import markdownToHTML from '../utils/markdownToHTML';
import WithSyntaxHighlighting from '../utils/WithSyntaxHighlighting';

export type MarkdownViewerProps = {
  value: string,
  isDarkTheme: boolean,
  openLinksInNewTab?: boolean,
};

const MarkdownViewer = (props: MarkdownViewerProps) => {
  const [content, setContent] = useState<null | string>(null);

  useEffect(() => {
    setContent(markdownToHTML(props.value || '', props.isDarkTheme));
  }, [props.value]);

  return (
      <ThemeProvider colorMode={props.isDarkTheme ? 'dark' : 'light'}>
          <WithSyntaxHighlighting isDarkTheme={props.isDarkTheme}>
              <SSRProvider>
                  <PrimerMarkdownViewer
                      loading={content === null}
                      openLinksInNewTab={props?.openLinksInNewTab}
                      dangerousRenderedHTML={{ __html: content || '' }}
                  />
              </SSRProvider>
          </WithSyntaxHighlighting>
      </ThemeProvider>
  );
};

export default MarkdownViewer;