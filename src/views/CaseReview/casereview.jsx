import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import { RegularCard, P, A, ItemGrid } from "components";

import iconsStyle from "variables/styles/iconsStyle";

function Icons({ ...props }) {
  return (
    <Grid container>
      <Progress
          percent={100}
          status= "success"
          status = "active"
      
        />
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Case Review"
          cardSubtitle={
            <P>
              {" "}
             
            </P>
          }
          content={
            <div>
             
             
            </div>
          }
        />
      </ItemGrid>
    </Grid>
    
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
