
import React from 'react';
import { observer, inject } from 'mobx-react';
import autobind from 'autobind-decorator';

import PointsBoard from "./../../components/pointsBoard/pointsBoard";
import PlayerItems, { addToSelectedItems } from "./../../components/playerItems/playerItems";

import './home.scss';

@inject("PointsStore")
class Home extends React.Component {

    constructor(props) {
        super();

        this.items = ["a", "b", "c", "d"];

        this.state = {
            userSelection: []
        }

    }


    @autobind
    onClick(item) {
        this.setState({
            userSelection: addToSelectedItems([...this.state.userSelection], item)
        });
    }


    render() {
        return (
            <div className="page home">
                <PointsBoard data={this.items} onClick={this.onClick} />
                <PlayerItems points={this.props.PointsStore} items={this.state.userSelection} />
            </div>
        )
    }
}


export default Home;