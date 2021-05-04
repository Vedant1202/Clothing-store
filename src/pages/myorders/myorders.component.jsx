/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import OrderItem from '../../components/order-item/order-item.component';

import './myorders.styles.scss';
import { retrieveOrder } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';

class MyOrdersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }

    componentDidMount = async () => {
        const { currentUser } = this.props;

        if (currentUser) {
            const orders = [];
            const myorders = await retrieveOrder(currentUser.id);
            myorders.docs.forEach(order => {
                orders.push(order.data());
            });

            this.setState(
                {
                    orders,
                },
                () => {
                    console.log(this.state);
                }
            );
        }
    };

    getOrdersDomElements = orders => {
        const orderDomElements = [];

        orders.forEach((order, i) => {
            orderDomElements.push(
                <div className='order-section' key={i}>
                    <h1>Order Number: #{orders.length - i}</h1>
                    <div className='myorders-header'>
                        <div className='header-block'>
                            <span>Product</span>
                        </div>
                        <div className='header-block'>
                            <span>Description</span>
                        </div>
                        <div className='header-block'>
                            <span>Quantity</span>
                        </div>
                        <div className='header-block'>
                            <span>Price</span>
                        </div>
                    </div>
                    {order.cartItems.map(cartItem => {
                        return <OrderItem key={cartItem.id} cartItem={cartItem}></OrderItem>;
                    })}
                    <div className='total'>Cart Total: $ {order.cartTotal}</div>
                </div>
            );
        });

        return orderDomElements;
    };

    render() {
        const { orders } = this.state;

        const orderDomElements = this.getOrdersDomElements(orders);

        return <div className='myorders-page'>{orderDomElements}</div>;
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MyOrdersPage);
