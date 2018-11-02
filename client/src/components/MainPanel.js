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

    click(e, id) {
        console.log("Button #" + id + " clicked");
    }

    render() {
        
        let lightButtons = [];
        for (let idx in this.props.lights) {
            lightButtons.push(
                <Button variant="outlined"
                        onClick={ e => this.click(e, idx) }
                        key={ idx }
                >
                { this.props.lights[idx].name }
                </Button>
            );
        }

        return (
            <div>
                { lightButtons }
            </div>
        );
    }

}

export default MainPanel;