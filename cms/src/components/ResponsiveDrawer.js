import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Divider, Drawer, Avatar, Hidden, IconButton} from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, Create, Save, Publish, LibraryBooks, InsertDriveFile } from '@material-ui/icons'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  user: {
    marginRight: theme.spacing(2),
  },
  SideFooter: {
    position:'absolute',
    bottom:0,
    display:'flex'
  },
  sideTop: {
    display:'flex',
    alignITems:'center',
  },
  sideAvatarWrapper: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'inherit',
    marginLeft:theme.spacing(2)
  },
  sideAvatar: {
    width:theme.spacing(7),
    height:theme.spacing(7)
  },
  sideUsername: {
    fontWeight:'normal'
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    <div className={[classes.toolbar,classes.sideTop].join(' ')} >
      <div className={classes.sideAvatarWrapper}>
        <Avatar className={[classes.purple,classes.sideAvatar].join(' ')}>A</Avatar>
        <h3 className={[classes.content,classes.sideUsername].join(' ')}>Admin</h3>
      </div>
    </div>
    <Divider />
      <List>
        <ListItem button >
            <ListItemIcon><Create /></ListItemIcon>
            <ListItemText primary={"New"} />
        </ListItem>
        <ListItem button >
            <ListItemIcon><Publish /></ListItemIcon>
            <ListItemText primary={"Publish"} />
        </ListItem>
        <ListItem button >
            <ListItemIcon><Save /></ListItemIcon>
            <ListItemText primary={"Save Draft"} />
        </ListItem>
        <ListItem button >
            <ListItemIcon><LibraryBooks /></ListItemIcon>
            <ListItemText primary={"Library"} />
        </ListItem>
        <ListItem button >
            <ListItemIcon><InsertDriveFile /></ListItemIcon>
            <ListItemText primary={"Unpublished"} />
        </ListItem>
      </List>
      <Divider />
      <div className={classes.sideFooter}><p className={classes.content} style={{textAlign:'right'}}>Oh! Hello there!</p></div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Title here
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Content Here
        </Typography> 
      </main>
    </div>
  );
}


export default ResponsiveDrawer;
