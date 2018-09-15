import React from 'react';

import "./pointsBoard.scss"

class PointsBoard extends React.Component {

    onClick(item) {
        if (typeof (this.props.onClick) == 'function') {
            this.props.onClick(item);
        }
    }

    renderItems() {
        if (this.props.data instanceof Array) {
            return this.props.data.map((item, index) => <li onClick={() => this.onClick(item)} key={index}>{item}</li>);
        }
    }

    header() {
        return <header className="box-title">
            <h1>Kahoot! Points</h1>
        </header>
    }

    render() {
        return (
            <div className="comp points-board">
                {this.header()}
                <ul>{this.renderItems()}</ul>
            </div>
        )
    }
}

export default PointsBoard;