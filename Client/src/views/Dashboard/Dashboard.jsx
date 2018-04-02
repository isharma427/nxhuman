import React from "react";
import PropTypes from "prop-types";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import axios from 'axios';

import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid,
  CustomInput,
  Button
} from "../../components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts";

import dashboardStyle from "../../variables/styles/dashboardStyle";




class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Progress
          percent={0}
          status="active"
      
        />
        <Grid container> 
            <RegularCard
              cardTitle="Welcome to nXHuman Case Authoring Tool"
              cardSubtitle="nXHuman Case Authoring Tool allows instructors to design cases for their students to assess patient interaction. Click Case Overview below to get started"
            />
            <RegularCard
            cardTitle="CaseID"
            cardSubtitle="Create a Name for your Case"
            content={
              <ItemGrid xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Case Name"
                        id="case-id"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: false
                        }}
                        onChangeText={(text) => this.setState({text})}
                        casenamevalue={this.state.text}
                        onChange={ this.handleChange.bind(this) }
                      />
                      {<Button 
            color="primary"
            onClick = {addCase(this.state.text)}
            onClick = {getCase()}
            >Submit
            <a>
            </a>
            </Button>} 
                      
                    </ItemGrid>   
             } 
             />
          </Grid>
        
          
            {<Button 
            color="primary"
            href="/caseoverview">Next Step
          
            </Button>}

      </div>
    );  
  }  
}
 function addCase(event) {
  
  axios.post('/api/dashboard', {
    content: event
  }).then(function (response) {
    console.log(response);
    console.log(this.state.text);
  })
  .catch(function (error) {
    console.log(error);
    console.log(this.state.text);
  });
  
 }

 function getCase() {
  
  axios.get('/api/getcaseuserdata', {
  }).then(function (response) {
    console.log(response);
    console.log(this.state.text);
  })
  .catch(function (error) {
    console.log(error);
    console.log(this.state.text);
  });
  
 };

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

  