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

import { render } from 'react-dom';
import { StitchClientFactory } from 'mongodb-stitch';
import { browserHistory, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'

import avatar from "../../assets/img/faces/marc.jpg";
let appId = "nxhumanapi-hpevv";


function myauth() {
  
if (process.env.APP_ID) {
  appId = process.env.APP_ID;
}

let mongodbService = "mongodb-atlas";
if (process.env.MONGODB_SERVICE) {
  mongodbService = process.env.MONGODB_SERVICE;
}

let options = {};
if (process.env.STITCH_URL) {
  options.baseUrl = process.env.STITCH_URL;
}

let stitchClientPromise = StitchClientFactory.create(appId,options);

  stitchClientPromise.then(stichClient => stichClient.authenticate("google"))
}
  

function Login({ ...props }) {
 
  return (
     
    <div>
      <Progress
          percent={0}
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
                    <CustomInput
                       labelText="Password"
                        id="password"
                        type = "password"
                        name = "password"
                      formControlProps={{
                        fullWidth: true
                      }}
                     
                    />
                    <button 
                    //color="primary"
                    onClick = {() => myauth()}
                    >Login!
                    </button>
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={3}>
                    
                      
                  </ItemGrid>
                  
                </Grid>
                
              </div>
            }
            footer={<Button 
            color="primary"
            href="/dashboard">Next Step
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