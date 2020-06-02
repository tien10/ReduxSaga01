import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const listTask = [
  {
    id: 1,
    title: "Mai",
    description: "Mai Ngoc",
    status: 0
  },
  {
    id: 2,
    title: "Lan",
    description: "Mai Ho Diep",
    status: 2
  },
  {
    id: 3,
    title: "Cuc",
    description: "Cuc Nguyen",
    status: 1
  }
];

class TaskBoard extends Component {

  renderBoard() {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            // vi du status co value la 1, se filter cac task co status la 1, in ra
            const taskFilterd = listTask.filter(task => task.status === status.value);
            return (
              <Grid item md={4} xs={12} key={status.value}>
                <Box mt={2} mb={2}>
                  <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                  {
                    taskFilterd.map(task => {
                      // ES6 khai bao nhu the nay
                      const { title } = task;
                      // them dong duoi la khong hien ra status
                      // const {status} = task;
                      return (
                        <Card key={task.id} className={classes.card}>
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
                          </CardContent>
                          <CardActions>
                            <Button size="small"></Button>
                          </CardActions>
                        </Card>
                      );
                    })
                  }
                </div>
              </Grid>
            );
          })
        }
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard} >
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon />
          Thêm user
        </Button>
        {this.renderBoard()
        }
      </div>
    )
  }
}

export default withStyles(styles)(TaskBoard);
