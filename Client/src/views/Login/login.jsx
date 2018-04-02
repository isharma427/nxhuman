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



function Login({ ...props }) {
  return (
     
    <div>
      <Progress
          percent={25}
          status="active"
      
        />
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="Login Portal"
            cardSubtitle="Please Log In to Access the Case Authoring Tool"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={3}>
                    <CustomInput
                       labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
                
              </div>
            }
            footer={<Button 
            color="primary"
            href="/dashboard">Next Step
            <a>
            </a>
            </Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          
        </ItemGrid>
      </Grid>
      
    </div>
  
  );
}

export default Login;
