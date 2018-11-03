import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import MainPanel from './MainPanel';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { classExpression } from 'babel-types';

import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        primary: grey
    },
    typography: {
        useNextVariants: true,
    }
});

const styles = (theme) => ({
    bottomNavigation: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },

    textFieldColor: {
        color: "#ffffff"
    },

    textRoot: {

    },

    textInput: {

    }
});


class MainUI extends Component {

    render() {
        const { classes } = this.props;
        let hubAddr = "Not Found";
        
        if ( this.props.lightsData.config != null) {
            console.log(this.props.lightsData);
            hubAddr = this.props.lightsData.config.ipaddress;
        }
        
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={ classes.grow }>RoomLights</Typography>
                        
                        <TextField
                            label="Hue Bridge IP Address"
                            value={ hubAddr }
                            classes={{
                                root: classes.textRoot,
                                
                            }}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </Toolbar>
                </AppBar>
                <MainPanel
                    lights={ this.props.lightsData.lights }
                    handleClick={ this.props.onLightButtonClick }
                />
                
                <BottomNavigation
                    className={ classes.bottomNavigation }
                    showLabels
                >
                    <BottomNavigationAction
                        label="Refresh"
                        icon={ <RefreshIcon /> }
                        onClick={ this.props.onRefreshClick } 
                    />
                </BottomNavigation>
            </div>
        );
    }
}

export default withStyles(styles)(MainUI);