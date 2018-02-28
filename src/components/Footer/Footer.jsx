import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "variables/styles/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="Case Overview" className={classes.block}>
                Case Overview
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="Patient Chart" className={classes.block}>
                Patient Chart
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="Dialogue" className={classes.block}>
                Dialogue
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="Summary" className={classes.block}>
                Summary
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
