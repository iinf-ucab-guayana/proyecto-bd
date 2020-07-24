import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 108
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 100px)'
  }
}));

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
