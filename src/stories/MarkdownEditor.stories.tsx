import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import { MarkdownEditor } from '../index';

const meta: Meta = {
  title: 'User Inputs/Markdown Editor',
  component: MarkdownEditor,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [value, onChange] = useState(args.value);
  const isDarkTheme = useDarkMode();

  return ( // @ts-ignore
      <MarkdownEditor {...args} value={value} isDarkTheme={isDarkTheme} onChange={onChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'This is the label',
  value: `Text can be **bold**, _italic_, or ~~strikethrough~~. [Links](https://github.com) should be blue with no underlines (unless hovered over).

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

> There should be no margin above this first sentence.
>
> Blockquotes should be a lighter gray with a gray border along the left side.
>
> There should be no margin below this final sentence.

# Header 1

This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Header 2

> This is a blockquote following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Header 3

\`\`\`
This is a code block following a header.
\`\`\`

#### Header 4

* This is an unordered list following a header.
* This is an unordered list following a header.
* This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
2. This is an ordered list following a header.
3. This is an ordered list following a header.

###### Header 6

| What      | Follows         |
|-----------|-----------------|
| A table   | A header        |
| A table   | A header        |
| A table   | A header        |

----------------

There's a horizontal rule above and below this.

----------------

Here is an unordered list:

* Salt-n-Pepa
* Bel Biv DeVoe
* Kid 'N Play

And an ordered list:

1. Michael Jackson
2. Michael Bolton
3. Michael Bublé

And an unordered task list:

- [x] Create a sample markdown document
- [x] Add task lists to it
- [ ] Take a vacation

And a "mixed" task list:

- [ ] Steal underpants
- ?
- [ ] Profit!

And a nested list:

* Jackson 5
  * Michael
  * Tito
  * Jackie
  * Marlon
  * Jermaine
* TMNT
  * Leonardo
  * Michelangelo
  * Donatello
  * Raphael

Definition lists can be used with HTML syntax. Definition terms are bold and italic.

<dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
</dl>

----------------

Tables should have bold headings and alternating shaded rows.

| Artist            | Album           | Year |
|-------------------|-----------------|------|
| Michael Jackson   | Thriller        | 1982 |
| Prince            | Purple Rain     | 1984 |
| Beastie Boys      | License to Ill  | 1986 |

If a table is too wide, it should condense down and/or scroll horizontally.

| Artist            | Album           | Year | Label       | Awards   | Songs     |
|-------------------|-----------------|------|-------------|----------|-----------|
| Michael Jackson   | Thriller        | 1982 | Epic Records | Grammy Award for Album of the Year, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Selling Album, Grammy Award for Best Engineered Album, Non-Classical | Wanna Be Startin' Somethin', Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T. (Pretty Young Thing), The Lady in My Life |
| Prince            | Purple Rain     | 1984 | Warner Brothers Records | Grammy Award for Best Score Soundtrack for Visual Media, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Soundtrack/Cast Recording, Grammy Award for Best Rock Performance by a Duo or Group with Vocal | Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U, Baby I'm a Star, Purple Rain |
| Beastie Boys      | License to Ill  | 1986 | Mercury Records | noawardsbutthistablecelliswide | Rhymin & Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, (You Gotta) Fight for Your Right, No Sleep Till Brooklyn, Paul Revere, Hold It Now, Hit It, Brass Monkey, Slow and Low, Time to Get Ill |

----------------

Code snippets like \`var foo = "bar";\` can be shown inline.

Also, \`this should vertically align\` ~~\`with this\`~~ ~~and this~~.

Code can also be shown in a block element.
\`\`\`
var foo = "bar";
\`\`\`

Code can also use syntax highlighting.
\`\`\`javascript
var foo = "bar";
\`\`\`

\`\`\`
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
\`\`\`

\`\`\`javascript
var foo = "The same thing is true for code with syntax highlighting. A single line of code should horizontally scroll if it is really long.";
\`\`\`

Inline code inside table cells should still be distinguishable.

| Language    | Code               |
|-------------|--------------------|
| JavaScript  | \`var foo = "bar";\` |
| Ruby        | \`foo = "bar"\`      |

----------------

The \`<samp>\` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Here an example of an error message: <samp>File not found</samp>

----------------

Small images should be shown at their actual size.

![](http://placekitten.com/g/300/200/)

Large images should always scale down and fit in the content container.

![](http://placekitten.com/g/1200/800/)

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

  Indent paragraphs to include them in the footnote.

  \`{ my code }\`

  Add as many paragraphs as you like.

\`\`\`
This is the final element on the page and there should be no margin below this.
\`\`\``,
};