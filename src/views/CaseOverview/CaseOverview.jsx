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


  handleSubmit(event) {
    alert('Information Stored and Associated With Case ID');
    
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
            cardSubtitle="Please Fill Out!"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Patient Condition"
                      id="patient-condition"
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
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                     <CustomInput
                      labelText="Age"
                      id="age"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
              
                </Grid>
                <Grid container>
                  
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Location of Case"
                      id="case-location"
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
                      labelText="Overall Case Description"
                      id="about-me"
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
            href="/patientchart"
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
