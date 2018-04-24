import React from "react";
import { Grid, InputLabel } from "material-ui";
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "material-ui";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "../../components";
import PropTypes from "prop-types";
import tableStyle from "../../variables/styles/tableStyle";
import CircularProgressbar from 'react-circular-progressbar'; 
function PatientChart() {
  return (
    <div>
     
      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Patient Height and Weight"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Patient Weight"
                      id="patient-weight"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Height"
                      id="patient-height"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Family History"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Medical History of Mother"
                      id="Mother-History"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Medical History of Father"
                      id="father-history"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Endocrine Values"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Cortisol"
                      id="cortisol"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="TSH"
                      id="tsh"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Flow and Vitals"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Heart Rate"
                      id="heart-rate"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Blood Pressure"
                      id="blood-pressure"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Gas Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Oxygen Pressure"
                      id="o2-pressure"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Carbon Dioxide Pressure"
                      id="co2-pressure"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Hematology Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Hemoglobin (g/dl)"
                      id="hemoglobin"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="White Blood Count (x103/_l"
                      id="wbc"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Hospital Examination"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Neck/Lymph Node Check"
                      id="Neck and Lymph"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Neurology Exam"
                      id="neuro-exam"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Immunizations"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Measles, Mumps, Rubella"
                      id="mmr"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Flu Shot Current?"
                      id="flu"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Nutrient Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Glucose (mg/dL)"
                      id="glucose"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Protein (g/dL)"
                      id="protein"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

    <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Lipids"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="LDL (mg/dL)"
                      id="ldl"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="HDL (mg/dL)"
                      id="hdl"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Liver"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Amylase (U/L)"
                      id="amylase"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Lipase"
                      id="lipase"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Medications List"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Active Medications"
                      id="active"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Inactive Medications"
                      id="inactive"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Microbiology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Source"
                      id="source"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Overall Results of Culture"
                      id="culture-results"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Miscellanous Factors"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Vitamin B12 (pg/mL)"
                      id="b12"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Folic Acid (ng/mL)"
                      id="folic-acid"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Patient Progress Notes"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Observation Notes"
                      id="observation"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Nutrition Summary"
                      id="nutrition"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Serum"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Lactate"
                      id="lactate"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Albumin"
                      id="albumin"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Toxicology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Alcohol Level"
                      id="alc"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Acetaminophen Level"
                      id="tylenol"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Urine Results"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Red Blood Cell Level"
                      id="rbc-urine"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Glucose Level"
                      id="glucose-urine"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Virology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Source"
                      id="source-viro"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Result"
                      id="result-viro"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        
      </Grid>

    
    </div>
  );
}

export default PatientChart;

