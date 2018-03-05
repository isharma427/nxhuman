import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";
import CircularProgressbar from 'react-circular-progressbar'; 

import { RegularCard, P, A, ItemGrid } from "components";

import iconsStyle from "variables/styles/iconsStyle";

function Icons({ ...props }) {
  return (
    <div>
      <ItemGrid xs={5} sm={5} md={3}>
           <CircularProgressbar percentage={80} />
      </ItemGrid>
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Summary of your Case"
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
    </div>
    
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
