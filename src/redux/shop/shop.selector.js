import { createSelector } from "reselect";

const selectshopData = state => state.shopData;

export const selectCollections = createSelector(
  [selectshopData],
  shopData => shopData.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
