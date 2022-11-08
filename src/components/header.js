import React from "react";
import '../styles/css.css';
import { headlists } from "../datas/data";
import { connect } from 'react-redux';

class Header extends React.Component {

    headcnct = headlists

    constructor(props) {
        super(props);
    }

    sendDataToProp = () => {
        this.props.changeprops();
    }

    render() {
        return (
            <div className="head-parent">
                <div className="head-child">
                    <img src="https://png.pngtree.com/png-vector/20220910/ourmid/pngtree-shopping-logo-deisgn-modern-style-with-bag-png-image_6155427.png" className="logo" />
                    <input type="text" placeholder="search.." className="search" />
                    <h3>Best Sellers</h3>
                    <h3>Today's Deals</h3>
                    <h3>Contact us</h3>
                    <button onClick={this.sendDataToProp}>View Cart</button>
                    <h3><span><img src="https://cdn-icons-png.flaticon.com/128/3737/3737151.png" className="cart1" /></span><img src="https://cdn-icons-png.flaticon.com/128/1490/1490817.png" className="cart" />{this.props.totalAmount}</h3>
                </div>
            </div>
        )
    }
}
const mapstateToProps = (state) => {
    return {
        totalAmount: state.count
    }
}

const mapsPropsToState = (dispatch) => {
    return {
        changeprops: () => {
            dispatch({ type: 'popup' });

        }
    }
}



export default connect(mapstateToProps, mapsPropsToState)(Header);