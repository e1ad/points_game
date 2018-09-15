import React from 'react';
import autobind from 'autobind-decorator';

import "./playerItems.scss";

const addToSelectedItems = (userSelection, item) => {
    let addItem;
    for (let index in userSelection) {
        let value = userSelection[index];
        if (value.name == item) {
            addItem = value;
            break;
        }
    }

    if (addItem) {
        addItem.qty++;
    }
    else {
        userSelection.push({ name: item, qty: 1 });
    }

    return userSelection;
}


class PlayerItems extends React.Component {


    constructor(props) {
        super();

        this.total = 0;
        this.bonus = 0;
    }



    calcItemScore(itemData, item) {
        let bonusPointPerItem = itemData.bonus.point / itemData.bonus.qty;
        let remainder = item.qty % itemData.bonus.qty;
        let score;
        if (remainder == 0) {
            score = bonusPointPerItem * item.qty;
        }
        else {
            let ceil = (item.qty - remainder) / itemData.bonus.qty;
            score = ceil * itemData.bonus.point + remainder * itemData.unitPoints
        }
        let bonus = score - (item.qty * itemData.unitPoints);
        this.bonus += bonus;
        return score;
    }



    @autobind
    renderCell(item, index) {
        let itemData = this.props.points[item.name];
        let score = itemData.bonus ? this.calcItemScore(itemData, item) : itemData.unitPoints * item.qty;
        this.total += score;
        return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{score}</td>
        </tr>
    }


    renderItems() {
        if (this.props.items instanceof Array && this.props.points instanceof Object) {
            return this.props.items.map(this.renderCell);
        }
    }


    header() {
        return <header className="box-title">
            <h1>Player Items</h1>
        </header>
    }


    componentWillUpdate(prevProps, prevState) {
        if (prevProps.items != this.props.items) {
            this.total = 0;
            this.bonus = 0;
        }
    }


    render() {
        return (
            <div className="comp player-items">
                {this.header()}
                <table>
                    <thead>
                        <tr>
                            <th>item</th>
                            <th>qty</th>
                            <th>score</th>
                        </tr>
                    </thead>
                </table>
                <div className="scroll-container">
                    <table>
                        <tbody>{this.renderItems()}</tbody>
                    </table>
                </div>
                <div className="bonuses">
                    <label>Bonuses</label>
                    <span>{this.bonus}</span>
                </div>
                <div className="total">
                    <label>total</label>
                    <div>{this.total}</div>
                </div>
                <button>NEW GAME</button>
            </div>
        )
    }

}


export default PlayerItems;


export { addToSelectedItems };