import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    }
});

class MainPanel extends Component {

    
    render() {
        return (
            <div>
                <Button variant="outlined">Button #1</Button>
                <Button variant="contained">Button #2</Button>
            </div>
        );
    }

}

export default MainPanel;