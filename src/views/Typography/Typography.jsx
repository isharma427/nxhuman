import React from "react";
import { withStyles } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {
  P,
  Quote,
  Muted,
  Primary,
  Info,
  Success,
  Warning,
  Danger,
  Small,
  RegularCard,
  Button
} from "components";

const style = {
  
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  }
};
function TypographyPage({ ...props }) {
  return (
    <div>
      <Progress
          percent={75}
          status="active"
      
        />
    <RegularCard
       
      cardTitle={"Enter Patient - Student Dialogue"}
      cardSubtitle={"Scroll right to see more"}
      
    />
  </div>
  );
 
  
}

export default withStyles(style)(TypographyPage);
