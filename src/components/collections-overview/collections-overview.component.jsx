/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherComponentProps }) => {
                return <CollectionPreview key={id} {...otherComponentProps}></CollectionPreview>;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
