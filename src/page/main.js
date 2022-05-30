import React from 'react';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import { Alert } from '@mui/material';
import Header from '@blocklet/ui-react/lib/Header';
import Footer from '@blocklet/ui-react/lib/Footer';

export default function Main() {
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box flex="1" my={4} overflow="auto">
        <Container>
          <Alert severity="info">
            Component Demo is a blocklet that is combined with other blocklets. <br />
            These blocklets use a unified auth service and config. <br />
            Click on "Discussion" or "Profile" to experience it!
          </Alert>
          <List>
            <ListItemLink href="./discussion">
              <ListItemIcon>
                <TextsmsIcon />
              </ListItemIcon>
              <ListItemText primary="Discussion" />
              <IconButton edge="end" aria-label="navigate" size="large">
                <NavigateNextIcon />
              </IconButton>
            </ListItemLink>
            <ListItemLink href="./profile">
              <ListItemIcon edge="end">
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
              <IconButton edge="end" aria-label="navigate" size="large">
                <NavigateNextIcon />
              </IconButton>
            </ListItemLink>
          </List>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
  .header {
    padding: 20px 0;
    display: flex;
    align-items: center;
  }
`;

const Media = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    flex-shrink: 0;
    margin-right: 10px;
  }
  .body {
    flex-grow: 1;
  }
  .right {
    flex-shrink: 0;
    margin-left: 10px;
  }
`;
