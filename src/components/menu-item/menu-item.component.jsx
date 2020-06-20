/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

class MenuItem extends Component {
    render() {
        return (
            <div className={`${this.props.size} menu-item`}>
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${this.props.imageUrl})`,
                    }}
                ></div>
                <button
                    className='content'
                    onClick={() => {
                        this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`);
                    }}
                >
                    <h1 className='title'>{this.props.title}</h1>
                    <span className='subtitle'>Shop Now</span>
                </button>
            </div>
        );
    }
}

export default withRouter(MenuItem);
