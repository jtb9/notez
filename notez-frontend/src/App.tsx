import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Divider, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { useHelpers, useRemirrorContext } from '@remirror/react';
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';

const SAMPLE_DOC = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      attrs: { dir: null, ignoreBidiAutoUpdate: null },
      content: [{ type: 'text', text: 'Loaded content' }],
    },
  ],
};

function App() {

  const renderPageLayout = (menu: any, body: any) => {
    return <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
      <Box className="MainMenu" sx={{ width: '300px', height: '100%' }}>{menu}</Box>
      <Box className="ContentBody" sx={{ flex: '1', height: '100%' }}>{body}</Box>
    </Box>
  }

  const demoBody = () => {
    return <WysiwygEditor placeholder='Start typing...' />
  }

  const renderMainMenu = () => {
    return <MenuList dense>
      <Divider />
      <MenuItem>
        <ListItemText>Account</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemButton>Add Note</ListItemButton>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemText>Note 1</ListItemText>
      </MenuItem>
    </MenuList>
  }

  return renderPageLayout(renderMainMenu(), demoBody());
}

export default App;
