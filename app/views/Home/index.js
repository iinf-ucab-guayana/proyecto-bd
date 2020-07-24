import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  cardRoot: {
    minWidth: 275,
    height: 'auto',
    margin: '0px 24px',
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typoStyle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  }
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Card className={classes.cardRoot} variant="outlined">
          <CardContent style={{padding: '50px 16px'}} className={classes.cardContent}>
            <Typography className={classes.typoStyle} variant="h5" component="h2">
              Crear una Propuesta
              <br/>
                de
              <br/>
              Trabajo de Grado
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.cardRoot} variant="outlined">
          <CardContent style={{padding: '50px 16px'}} className={classes.cardContent}>
            <Typography className={classes.typoStyle} variant="h5" component="h2">
              Propuestas
              <br/>
                de
              <br/>
              Trabajo de Grado
              <br/>
                Actuales
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.cardRoot} variant="outlined">
          <CardContent style={{padding: '50px 16px'}} className={classes.cardContent}>
            <Typography className={classes.typoStyle} variant="h5" component="h2">
              Trabajo de Grado:
              <br/>
                Concluidos
              <br/>
                En Proceso
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
