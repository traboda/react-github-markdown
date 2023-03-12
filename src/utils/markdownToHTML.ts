import clsx from 'clsx';
import MarkdownIt from 'markdown-it';

import style from '../style.module.scss';

const markdownBody = style['markdown-body'];
const markdownBodyDark = style['markdown-body-dark'];

const md = new MarkdownIt({ html: true });
md.use(require('markdown-it-footnote'));

export default (content: string, isDarkTheme: boolean) => {
  return `<div class="${clsx(markdownBody, isDarkTheme && markdownBodyDark)}">${md.render(content)}</div>`;
};