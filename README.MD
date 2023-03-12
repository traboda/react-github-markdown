<div align="center">
    <h1 style="margin-top: 12px">React Github Markdown</h1>
    <p style="font-size: 110%">
        A simple wrapper to easily add GitHub's markdown editor and viewer to your React applications.  
    </p>
    <div align="center">
          <img alt="MIT" src="https://img.shields.io/github/license/traboda/react-github-markdown?style=for-the-badge"/>
          <a href="https://www.npmjs.com/package/react-github-markdown">
            <img alt="Latest Version on NPM" src="https://img.shields.io/npm/v/react-github-markdown.svg?style=for-the-badge"/>
          </a>
          <a href="https://www.npmjs.com/package/react-github-markdown">
            <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/react-github-markdown.svg?style=for-the-badge"/>
          </a>
          <a href="https://github.com/traboda/react-github-markdown/stargazers">
            <img alt="Github Stars" src="https://img.shields.io/github/stars/traboda/react-github-markdown?style=for-the-badge" />
          </a>
    </div>
</div>

### Installation

```bash
npm install react-github-markdown
```

### Usage

```jsx
import React from 'react';
import { MarkdownEditor, MarkdownViewer } from 'react-github-markdown';

const App = () => {
  const [markdown, setMarkdown] = React.useState('');

  return (
    <div>
      <MarkdownEditor
        markdown={markdown}
        onChange={setMarkdown}
      />
      <MarkdownViewer markdown={markdown} />
    </div>
  );
};
```

### Credits
This project uses -
- MarkdownEditor & MarkdownViewer components  from [GitHub's Primer React](https://primer.style/react/) Library.
  Checkout, and contribute to [Primer React Repository](https://github.com/primer/react).
- Markdown styling is imported from [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
