import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles.js'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid
            container
            justify="space-between"
          >
            <Grid item md={8}>
              <Typography component="h2">
                {title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {/* lay status cua STATUES */}
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="edit" size="small">
            <Icon fontSize="small">edit</Icon>
          </Fab>
          <Fab color="secondary" aria-label="delete" size="small">
            <Icon fontSize="small">delete</Icon>
          </Fab>
        </CardActions>
      </Card>
    )
  }
}
export default withStyles(styles)(TaskItem);