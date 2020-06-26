/** @format */

import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../collection/collection.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:category`} component={CategoryPage}></Route>
        </div>
    );
};

export default ShopPage;
