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
  Button,
  ItemGrid
} from "components";
import "./typography.css"

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
        cardTitle={"Student Dialogue"}
        cardSubtitle={"Scroll down to see more!"}
      />


<div id="container">
  <div id="container2">
    <div class="box intro title">
      <div>
            <h1>Introduction</h1>
        <input type="text" class="md" id="mdintro" placeholder="Hi there! I'm ___?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>
    <div class="box intro three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      </div>
    </div>
    <div class="box intro one">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Nice to see you. Let's start!"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>
    <div class="box intro three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      </div>
    </div>
    <div class="box update title">
      <div>
            <h1>Chart Update</h1>
        <input type="text" class="md" id="mdintro" placeholder="Any chart updates?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>
   <div class="box update three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>  
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>  
      </div>
    </div>
    <div class="box update two">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Can you elaborate?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>

        <p class="d2"></p>

        <input type="text" class="md" id="mdintro" placeholder="Good to hear!"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
    <div class="box update six">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p class="d6"></p>
      <p class="d6"></p>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      </div>
    </div>
     <div class="box problem title">
      <div>
            <h1>Patient Problem</h1>
        <input type="text" class="md" id="mdintro" placeholder="What brings you in today?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
     <div class="box problem three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      </div>
    </div>
    <div class="box problem two">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Follow-up questions."/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>

        <p class="d2"></p>

        <input type="text" class="md" id="mdintro" placeholder="Let me examine you."/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
    <div class="box problem six">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p class="d6"></p>
      <p class="d6"></p>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      </div>
    </div>
    <div class="box problem one">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Additional concerns?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
     <div class="box problem three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>  
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      </div>
    </div>
    <div class="box history title">
      <div>
            <h1>Patient History</h1>
        <input type="text" class="md" id="mdintro" placeholder="Family history of __?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
  <div class="box history three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>  
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      </div>
    </div>
    <div class="box history two">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Tell me more."/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>

        <p class="d2"></p>

        <input type="text" class="md" id="mdintro" placeholder="Good to know."/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
    <div class="box history six">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p class="d6"></p>
      <p class="d6"></p>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      </div>
    </div>
    <div class="box diagnosis title">
      <div>
            <h1>Diagnosis</h1>
        <input type="text" class="md" id="mdintro" placeholder="I'm prescribing __ for __"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>
    <div class="box diagnosis three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      </div>
    </div>
    <div class="box diagnosis one">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Any additional questions?"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>
    <div class="box diagnosis three">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      </div>
    </div>
    <div class="box diagnosis two">
      <div>
        <input type="text" class="md" id="mdintro" placeholder="Follow-up answer."/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>

        <p class="d2"></p>

        <input type="text" class="md" id="mdintro" placeholder="Great!"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
      </div>
    </div>   
    <div class="box diagnosis six">
      <div>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p class="d6"></p>
      <p class="d6"></p>
        <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/> 
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p> 
      </div>
    </div>
    <div class="box diagnosis one">
    <div>
      <input type="text" class="md" id="mdintro" placeholder="Additional instructions."/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
    </div>
  </div>
  <div class="box diagnosis three">
    <div>
      <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>  
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
    </div>
  </div>
    <div class="box diagnosis one">
    <div>
      <input type="text" class="md" id="mdintro" placeholder="Take care!"/>
            Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
    </div>
  </div>
  <div class="box diagnosis three">
    <div>
      <p><input type="text" class="patient" id="patientintro" placeholder="Positive Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Neutral Response"/>
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
      <p><input type="text" class="patient" id="patientintro" placeholder="Negative Response"/>  
                <select name="cars">
                    <option value="positive">Positive</option>
                    <option value="neutral" selected="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                </select>
                Optional: <input type="checkbox" id="optional" name="optional" value="optional"/>
            </p>
    </div>
  </div>
    <div class="box diagnosis">
        <div>
        </div>
    </div>

  </div>
</div>

    </div>
  );
  
}

export default withStyles(style)(TypographyPage);
