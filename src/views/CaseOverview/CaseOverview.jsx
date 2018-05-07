import React from "react";
import { Grid, InputLabel } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "../../components";

import avatar from "../../assets/img/faces/marc.jpg";


class UserProfile extends React.Component{


  handleSubmit() {
    alert('Information Stored and Associated With Case ID');
    window.location = '/patientchart'
     /* if (!this.isValidForm) {
      alert('Please fill out all fields.')
      
  } else {
    alert('Information Stored and Associated With Case ID');
    window.location = '/patientchart'
  }  */ 
  }

  isValidForm = () => {
    let valid1 = this.state.patientcondition && this.state.firstname && this.state.lastname && this.state.age;
    let valid2 = this.state.location && this.state.description;
    if (!valid1) {
      this.setState({required1error: 'Please fill in this field.'});
  }
  else {
      this.setState({required1error: ''});
  }
  if (!valid2) {
      this.setState({required2error: 'Please fill in this field.'});
  }
  else {
      this.setState({required2error: ''});
  }
  return valid1 && valid2;
}

state = {

  patientcondition: '',
  firstname: '',
  lastname: '',
  age: '',
  location: '',
  description: ''


}
  render() {
  return (
     
    <div>
      <Progress
          percent={25}
          status="active"
      
        />
      <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Overall Patient Information"
            cardSubtitle="Please Fill Out the Following Information and Click Next Step to Continue. ***All fields are mandatory!***"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***Patient Condition***"
                      id="patient-condition"
                      onChange = {this.state.patientcondition}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                  
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***First Name***"
                      id="first-name"
                      onChange = {this.state.firstname}

                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="***Last Name***"
                      id="last-name"
                      onChange = {this.state.lastname}

                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                     <CustomInput
                      labelText="***Age***"
                      id="age"
                      onChange = {this.state.age}

                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
              
                </Grid>
                <Grid container>
                  
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***Location of Case***"
                      id="case-location"
                      onChange = {this.state.location}

                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      
                    </InputLabel>
                    <CustomInput
                      labelText="***Overall Case Description***"
                      id="about-me"
                      onChange = {this.state.description}

                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button 
            color="primary"
            //href="/patientchart"
            onClick = {this.handleSubmit}
            >Next Step
            <a >
            </a>
            </Button>
            
            
            }
          />
           
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={15}>
          
        </ItemGrid>
      </Grid>
      
    </div>
  
  );
}
}


export default UserProfile;
