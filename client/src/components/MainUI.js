import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import MainPanel from './MainPanel';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RefreshIcon from '@material-ui/icons/Refresh';
import { classExpression } from 'babel-types';

const style = {
    width: '100%',
    position: 'fixed',
    bottom: 0,
};

class MainUI extends Component {

    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">RoomLights</Typography>
                    </Toolbar>
                </AppBar>
                <MainPanel />
                <BottomNavigation
                    style={style}
                    showLabels
                >
                    <BottomNavigationAction label="Refresh" icon={<RefreshIcon />} />
                </BottomNavigation>
            </div>
        );
    }
}

export default MainUI;