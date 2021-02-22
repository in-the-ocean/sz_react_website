import '../App.css';
import { Component } from 'react';
import Tab from './Tab.js'

class TabList extends Component {
    render() {

        return (
            this.props.tabs.map((tab) =>
                <Tab key={tab.id} tab={tab} ctab={this.props.ctab} active={this.props.active}/>
            )
        )
    }
}

export default TabList