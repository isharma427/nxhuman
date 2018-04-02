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
     
      <Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
          //Patient Info
            cardTitle="Patient and Case Information"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Case Date"
                      id="case-date"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Case Title"
                      id="case-title"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Case Writer"
                      id="case-writer"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Writer's Email"
                      id="writers-email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient First Name"
                      id="patient-first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Last Name"
                      id="patient-last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Sex"
                      id="patient-sex"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Ethnicity"
                      id="patient-ethnicity"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Allergies"
                      id="patient-allergies"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Age"
                      id="patient-age"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
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
          
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Social, Medical, and Family History"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="General Medical History of Mother"
                      id="Mother-History"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="General Medical History of Father"
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
          
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Endocrine Values"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
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
        <ItemGrid xs={12} sm={12} md={4}>
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Flow and Vitals"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Gas Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Pressure of O2"
                      id="o2-pressure"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Pressure of CO2"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Hematology Information"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Hemoglobin (g/dL)"
                      id="hemoglobin"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="White Blood Count (x103/_l)"
                      id="white-blood-count"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Hospital Examination"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Neck/Lymph Node"
                      id="necklymph-node"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Neurology"
                      id="neuro"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Immunizations"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Flu Shot?"
                      id="flu-shot"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Nutrient Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Protein (g/dL)"
                      id="proteiin"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Lipids"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Liver"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Active and Inactive Medications"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Active Medication List"
                      id="active-meds"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Inactive Medication List"
                      id="inactive-meds"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Microbiology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="source"
                      id="source"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Culture Final Result"
                      id="culture-final-result"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Other Factors"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Vitamin B12 (pg/mL)"
                      id="vitamin-b12"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="progress Notes"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Overnight Events"
                      id="overnight-events"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Nutrition"
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
        <ItemGrid xs={12} sm={12} md={4}>
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Serum"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
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
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Albumin"
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
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Toxicology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Alcohol"
                      id="alcohol"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Acetaminophen"
                      id="acetaminophen"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Urine"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Red Blood Cell"
                      id="rbc"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Glucose In Urine"
                      id="glucose-in-urine"
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
          
        </ItemGrid>
      </Grid><Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Virology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Source"
                      id="source-virus"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={24}>
                    <CustomInput
                      labelText="Result"
                      id="result-virus"
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
          
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default PatientChart;

