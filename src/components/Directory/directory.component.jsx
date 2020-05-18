import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-Item.component";
import "./directory.styles.scss";

const Directory = ({ myDirectory }) => (
  <div className="directory-menu">
    {myDirectory.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  myDirectory: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
