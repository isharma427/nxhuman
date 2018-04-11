import React from "react";
import PropTypes from "prop-types";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import axios from 'axios';
import ajax from 'ajax';
import $ from 'jquery'; 

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

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    $.ajax({
      method: "POST",
      url: "localhost:3002/test",
      data: this.state.value
      })
      .done(function( msg ) {
      alert( "Data Saved: " + msg );
    })
    event.preventDefault();
  }
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
                    
                        
                      />
                      {<Button 
                        color="primary"
                        
            //onClick = {getCase()}
            >Submit
            <a>
            </a>
            </Button> 
                      
            }</ItemGrid>   
          } 
             />
          </Grid>
          
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
        
          
            {<Button 
            color="primary"
            href="/caseoverview">Next Step
          
            </Button>}

      </div>
    );  
  }  
}

 function addCase(event) {
  
  $.ajax({
    method: "POST",
    url: "localhost:3002/test",
    data: event
  })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  
 }

 /* function getCase() {
  
  axios.get('/api/getcaseuserdata', {
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
 }; */

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

  