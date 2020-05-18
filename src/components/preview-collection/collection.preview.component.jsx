import React from "react";

import "./preview.styles.scss";
import CollectionItem from "../collection-item/collection-component";

const CollectionPreview = ({ collection }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="preview">
        {collection.items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={collection.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
