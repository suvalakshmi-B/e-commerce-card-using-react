import React from "react";
import Header from "./header";
import Sidenav from "./sidenav";
import Card from "./card";
import '../styles/css.css';
import DispatchMethod from './dispatch';
import ChangeUpdate from "./changeupadate";

class First extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ChangeUpdate />
                <DispatchMethod />
                <div className='container'>
                    <div className='sidenav'>
                        <Sidenav />
                    </div>
                    <div className='body'>
                        <Header />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default First;