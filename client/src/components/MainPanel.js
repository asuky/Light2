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

    click(e, id, status) {
        console.log("Button #" + id + " clicked");
        this.props.handleClick(id, status);
    }

    render() {
        console.log(this.props.lights);
        let lightButtons = [];
        for (let idx in this.props.lights) {
            // どうも React が key のキーで部分更新の有無を判別している様子
            // Button 自体で key の prop を使っているわけではないが
            // 外さないこと（外すと warning が出る）
            if ( this.props.lights[idx].state.reachable === false) {
                lightButtons.push(
                    <Button variant="disabled"
                        onClick={ e => this.click(e, idx, this.props.lights[idx].state) }
                        key={ idx }
                    >
                    { this.props.lights[idx].name }
                    </Button>
                );
            } else if ( this.props.lights[idx].state.on === true) {
                lightButtons.push(
                    <Button variant="contained"
                        onClick={ e => this.click(e, idx, this.props.lights[idx].state) }
                        key={ idx }
                    >
                    { this.props.lights[idx].name }
                    </Button>
                );
            } else {
                lightButtons.push(
                    <Button variant="outlined"
                        onClick={ e => this.click(e, idx, this.props.lights[idx].state) }
                        key={ idx }
                    >
                    { this.props.lights[idx].name }
                    </Button>
                );
            }

        }

        return (
            <div>
                { lightButtons }
            </div>
        );
    }

}

export default MainPanel;