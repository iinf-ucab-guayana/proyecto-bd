import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const logo = `data:image/jpg;base64,${fs.readFileSync(path.join(__dirname, './assets/images/logo.png')).toString('base64')}`;

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar style={{ minHeight: 100, backgroundColor: '#333237', boxShadow: '225px 16px 25px -28px rgba(0,0,0,0.75)' }}>
        <img style={{ width: 70}} src={logo} />
        <div className={classes.flexGrow} />
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
