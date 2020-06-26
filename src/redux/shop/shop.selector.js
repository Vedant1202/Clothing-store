/** @format */

const { createSelector } = require('reselect');

const selectShop = state => state.shop;

const selectShopCollections = createSelector([selectShop], shop => shop.collections);

const selectShopCollectionsForPreview = createSelector([selectShopCollections], collections =>
    Object.keys(collections).map(key => collections[key])
);

const selectCollection = collectionUrlParam =>
    createSelector([selectShopCollections], collections => collections[collectionUrlParam]);

export { selectShopCollections, selectShopCollectionsForPreview, selectCollection };
