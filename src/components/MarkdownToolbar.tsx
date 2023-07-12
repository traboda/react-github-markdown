import { Box } from '@primer/react';
import {
  BoldIcon, CodeIcon, HeadingIcon, ItalicIcon, LinkIcon, ListOrderedIcon,
  ListUnorderedIcon, QuoteIcon, TasklistIcon,
} from '@primer/octicons-react';
import { ToolbarButton } from '@primer/react/lib-esm/drafts/MarkdownEditor/Toolbar';
import { MarkdownEditorContext } from '@primer/react/lib-esm/drafts/MarkdownEditor/_MarkdownEditorContext';
import React from 'react';
import { useContext } from 'react';
import { isMacOS } from '@primer/behaviors/utils';

export type ToolbarButton = 'header' | 'bold' | 'italic' | 'quote' | 'code' | 'link' | 'unorderedList' | 'orderedList' | 'taskList';

type DefaultToolbarButtons = {
  buttons?: ToolbarButton[]
}; 

const ToolbarButtons = ({
  buttons = ['header', 'bold', 'italic', 'quote', 'code', 'link', 'unorderedList', 'orderedList', 'taskList'],
}: DefaultToolbarButtons) => {
  const { formattingToolsRef } = useContext(MarkdownEditorContext);

  const cmdOrCtrl = isMacOS() ? 'Cmd' : 'Ctrl';

  return (
      <>
          <Box>
              {((buttons?.length > 0) && buttons.includes('header')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.header()}
                  icon={HeadingIcon}
                  aria-label="Add header text"
              />
              )}
              {((buttons?.length > 0) && buttons.includes('bold')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.bold()}
                  icon={BoldIcon}
                  aria-label={`Bold (${cmdOrCtrl} + B)`}
              />
              )}
              {((buttons?.length > 0) && buttons.includes('italic')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.italic()}
                  icon={ItalicIcon}
                  aria-label={`Italic (${cmdOrCtrl} + I)`}
              />
              )}
          </Box>
          <Box>
              {((buttons?.length > 0) && buttons.includes('quote')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.quote()}
                  icon={QuoteIcon}
                  aria-label={`Insert a quote (${cmdOrCtrl} + Shift + .)`}
              />
              )}
              {((buttons?.length > 0) && buttons.includes('code')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.code()}
                  icon={CodeIcon}
                  aria-label={`Insert code (${cmdOrCtrl} + E)`}
              />
              )}
              {((buttons?.length > 0) && buttons.includes('link')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.link()}
                  icon={LinkIcon}
                  aria-label={`Add a link (${cmdOrCtrl} + K)`}
              />
              )}
          </Box>
          <Box>
              {((buttons?.length > 0) && buttons.includes('unorderedList')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.unorderedList()}
                  icon={ListUnorderedIcon}
                  aria-label={`Add a bulleted list (${cmdOrCtrl} + 8)`}
              />
              )}
              {((buttons?.length > 0) && buttons.includes('orderedList')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.orderedList()}
                  icon={ListOrderedIcon}
                  aria-label={`Add a numbered list (${cmdOrCtrl} + Shift + 7)`}
              />
              )}
              {((buttons?.length > 0) && buttons.includes('taskList')) && (
              <ToolbarButton
                  onClick={() => formattingToolsRef.current?.taskList()}
                  icon={TasklistIcon}
                  aria-label={`Add a task list (${cmdOrCtrl} + Shift + L)`}
              />
              )}
          </Box>
      </>
  );
};

export default ToolbarButtons;