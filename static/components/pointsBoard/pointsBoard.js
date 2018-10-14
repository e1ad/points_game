import React from 'react';
import autobind from 'autobind-decorator';

import AdItem from "./../adItem/adItem";
import "./pointsBoard.scss"


class PointsBoard extends React.Component {

    onClick(item) {
        if (typeof (this.props.onClick) == 'function') {
            this.props.onClick(item);
        }
    }
    
    @autobind
    renderItem(item, index){
        let itemData = this.props.points[item];
        return <li onClick={() => this.onClick(item)} key={index}>
                    <AdItem name={item} data={itemData} />
                </li>;
    }


    renderItems() {
        if (this.props.items instanceof Array) {
            return this.props.items.map(this.renderItem);
        }
    }

    header() {
        return <header className="box-title">
            <h1>Board Points</h1>
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