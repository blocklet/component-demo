import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import { Alert, AlertTitle } from '@material-ui/lab';

import Button from '@arcblock/ux/lib/Button';

import { useSessionContext } from '../libs/session';

export default function Main() {
  const { session, api } = useSessionContext();

  const isLogin = !!session.user;

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <Container>
      <Media className="header">
        <div className="left">
          <div style={{ fontSize: 20 }}>Component Demo</div>
        </div>
        <div className="right">
          { isLogin && <span style={{ top: 1, position: 'relative', marginRight: 6 }}>Hello, {session.user.fullName}</span> }
          <Button onClick={() => isLogin ? session.logout() : session.login()}>{ isLogin ? 'Logout' : 'Login' }</Button>
        </div>
      </Media>
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
          <IconButton edge="end" aria-label="navigate">
            <NavigateNextIcon />
          </IconButton>
        </ListItemLink>
        <ListItemLink href="./profile">
          <ListItemIcon edge="end">
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          <IconButton edge="end" aria-label="navigate">
            <NavigateNextIcon />
          </IconButton>
        </ListItemLink>
      </List>
    </Container>
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
