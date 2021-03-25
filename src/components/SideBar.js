import React from 'react';
import { 
  makeStyles, 
  Drawer, 
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Button,
  ListSubheader,
  Hidden
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalMovies from '@material-ui/icons/LocalMovies';
import SportsEsports from '@material-ui/icons/SportsEsports';
import Videocam from '@material-ui/icons/Videocam';
import Book from '@material-ui/icons/Book';
import YouTube from '@material-ui/icons/YouTube';

const useStyles = makeStyles ((theme) =>({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  list: {
    padding: theme.spacing(1)
  },
  listItemText: {
    fontSize: 14,
    fontWeight: 600
  },
  subHeader: {
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  titleOne:{
    fontWeight: 700,
    fontSize: 20
  },
}));

function SideBar(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List className={classes.list}>
              <ListItem button>
                <ListItemIcon> {<Home />} </ListItemIcon>
                <ListItemText
                  primary={'Início'}
                  classes={{
                    primary: classes.listItemText,
                  }} 
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon> {<Whatshot />} </ListItemIcon>
                <ListItemText
                  primary={'Em alta'}
                  classes={{
                    primary: classes.listItemText,
                  }} 
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon> {<Subscriptions />} </ListItemIcon>
                <ListItemText
                  primary={'Incrições'}
                  classes={{
                    primary: classes.listItemText,
                  }} 
                />
              </ListItem>
            </List>
            
            <Divider />
            
            <List className={classes.list}>
              <ListItem button>
                <ListItemIcon> {<VideoLibrary />} </ListItemIcon>
                <ListItemText
                  primary={'Biblioteca'}
                  classes={{
                    primary: classes.listItemText,
                  }} 
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon> {<History />} </ListItemIcon>
                <ListItemText
                  primary={'Histórico'}
                  classes={{
                    primary: classes.listItemText,
                  }} 
                />
              </ListItem>
            </List>
            
            <Divider />

            <Box p={3}>
              <Typography variant="body">
                Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircle />}
                >
                  Fazer Login
                </Button>
              </Box>
            </Box>

            <Divider />
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader className={classes.subHeader}>
                  Mais do Youtube
                </ListSubheader>
              }
              className={classes.list}
            >
          <ListItem button>
            <ListItemIcon>
              <YouTube />
            </ListItemIcon>
            <ListItemText 
              primary="Youtube Premium"
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SportsEsports />
            </ListItemIcon>
            <ListItemText 
              primary="Jogos" 
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>
          
          <ListItem button>
            <ListItemIcon>
              <LocalMovies />
            </ListItemIcon>
            <ListItemText 
              primary="Filmes" 
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>
          
          <ListItem button>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText 
              primary="Apreender" 
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Videocam />
            </ListItemIcon>
            <ListItemText 
              primary="Ao vivo" 
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>
        </List>

          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}

export default SideBar;
