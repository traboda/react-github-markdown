import clsx from 'clsx';
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import hljs from 'highlight.js';

import style from '../style.module.scss';

const markdownBody = style['markdown-body'];
const markdownBodyDark = style['markdown-body-dark'];

const md = new MarkdownIt({
  html: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (_) {}
    }

    return '';
  },
});
md.use(MarkdownItFootnote);

export default (content: string, isDarkTheme: boolean) => {
  return `<div class="${clsx(markdownBody, isDarkTheme && markdownBodyDark)}">${md.render(content)}</div>`;
};