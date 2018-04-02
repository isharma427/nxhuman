import React, { Component } from "react";
import { withStyles, Grid, GridList, ListItem, List, Card, FormControl, InputLabel, Checkbox, Input, MenuItem, Select } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import CircularProgressbar from 'react-circular-progressbar';
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

function PageHeader({ ...props }) {
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
        </div>
    );
}

function PageFooter({ ...props }) {
    return (
        <div>
            <Button
                color="primary">Next Step
                <a href="/src/views/Icons" >
                </a>
            </Button>
        </div>
    );
}

class DialogueForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        greeting: '',
        greetingOptional: false,
        greeting2: '',
        greetingOptional2: false,
        chart: '',
        chartOptional: false,
        chart2: '',
        chartOptional2: false,
        chart3: '',
        chartOptional3: false,
        problem: '',
        problemOptional: false,
        problem2: '',
        problemOptional2: false,
        problem3: '',
        problemOptional3: false,
        problem4: '',
        problemOptional4: false,
        history: '',
        historyOptional: false,
        history2: '',
        historyOptional2: false,
        history3: '',
        historyOptional3: false,
        diagnosis: '',
        diagnosisOptional: false,
        diagnosis2: '',
        diagnosisOptional2: false,
        diagnosis3: '',
        diagnosisOptional3: false,
        diagnosis4: '',
        diagnosisOptional4: false,
        diagnosis5: '',
        diagnosisOptional5: false,
        diagnosis6: '',
        diagnosisOptional6: false,


        posPatient: '',
        emotionsPos: '',
        posPatientOptional: false,
        posPatient2: '',
        emotionsPos2: '',
        posPatientOptional2: false,
        posPatient3: '',
        emotionsPos3: '',
        posPatientOptional3: false,
        posPatient4: '',
        emotionsPos4: '',
        posPatientOptional4: false,
        posPatient5: '',
        emotionsPos5: '',
        posPatientOptional5: false,
        posPatient6: '',
        emotionsPos6: '',
        posPatientOptional6: false,
        posPatient7: '',
        emotionsPos7: '',
        posPatientOptional7: false,
        posPatient8: '',
        emotionsPos8: '',
        posPatientOptional8: false,
        posPatient9: '',
        emotionsPos9: '',
        posPatientOptional9: false,
        posPatient10: '',
        emotionsPos10: '',
        posPatientOptional10: false,
        posPatient11: '',
        emotionsPos11: '',
        posPatientOptional11: false,
        posPatient12: '',
        emotionsPos12: '',
        posPatientOptional12: false,
        posPatient13: '',
        emotionsPos13: '',
        posPatientOptional13: false,
        posPatient14: '',
        emotionsPos14: '',
        posPatientOptional14: false,
        posPatient15: '',
        emotionsPos15: '',
        posPatientOptional15: false,
        posPatient16: '',
        emotionsPos16: '',
        posPatientOptional16: false,
        posPatient17: '',
        emotionsPos17: '',
        posPatientOptional17: false,
        posPatient18: '',
        emotionsPos18: '',
        posPatientOptional18: false,

        neutPatient: '',
        emotionsNeut: '',
        neutPatientOptional: false,
        neutPatient2: '',
        emotionsNeut2: '',
        neutPatientOptional2: false,
        neutPatient3: '',
        emotionsNeut3: '',
        neutPatientOptional3: false,
        neutPatient4: '',
        emotionsNeut4: '',
        neutPatientOptional4: false,
        neutPatient5: '',
        emotionsNeut5: '',
        neutPatientOptional5: false,
        neutPatient6: '',
        emotionsNeut6: '',
        neutPatientOptional6: false,
        neutPatient7: '',
        emotionsNeut7: '',
        neutPatientOptional7: false,
        neutPatient8: '',
        emotionsNeut8: '',
        neutPatientOptional8: false,
        neutPatient9: '',
        emotionsNeut9: '',
        neutPatientOptional9: false,
        neutPatient10: '',
        emotionsNeut10: '',
        neutPatientOptional10: false,
        neutPatient11: '',
        emotionsNeut11: '',
        neutPatientOptional11: false,
        neutPatient12: '',
        emotionsNeut12: '',
        neutPatientOptional12: false,
        neutPatient13: '',
        emotionsNeut13: '',
        neutPatientOptional13: false,
        neutPatient14: '',
        emotionsNeut14: '',
        neutPatientOptional14: false,
        neutPatient15: '',
        emotionsNeut15: '',
        neutPatientOptional15: false,
        neutPatient16: '',
        emotionsNeut16: '',
        neutPatientOptional16: false,
        neutPatient17: '',
        emotionsNeut17: '',
        neutPatientOptional17: false,
        neutPatient18: '',
        emotionsNeut18: '',
        neutPatientOptional18: false,

        negPatient: '',
        emotionsNeg: '',
        negPatientOptional: false,
        negPatient2: '',
        emotionsNeg2: '',
        negPatientOptional2: false,
        negPatient3: '',
        emotionsNeg3: '',
        negPatientOptional3: false,
        negPatient4: '',
        emotionsNeg4: '',
        negPatientOptional4: false,
        negPatient5: '',
        emotionsNeg5: '',
        negPatientOptional5: false,
        negPatient6: '',
        emotionsNeg6: '',
        negPatientOptional6: false,
        negPatient7: '',
        emotionsNeg7: '',
        negPatientOptional7: false,
        negPatient8: '',
        emotionsNeg8: '',
        negPatientOptional8: false,
        negPatient9: '',
        emotionsNeg9: '',
        negPatientOptional9: false,
        negPatient10: '',
        emotionsNeg10: '',
        negPatientOptional10: false,
        negPatient11: '',
        emotionsNeg11: '',
        negPatientOptional11: false,
        negPatient12: '',
        emotionsNeg12: '',
        negPatientOptional12: false,
        negPatient13: '',
        emotionsNeg13: '',
        negPatientOptional13: false,
        negPatient14: '',
        emotionsNeg14: '',
        negPatientOptional14: false,
        negPatient15: '',
        emotionsNeg15: '',
        negPatientOptional15: false,
        negPatient16: '',
        emotionsNeg16: '',
        negPatientOptional16: false,
        negPatient17: '',
        emotionsNeg17: '',
        negPatientOptional17: false,
        negPatient18: '',
        emotionsNeg18: '',
        negPatientOptional18: false,

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleChangeCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const flexContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
        };

        const flexItem = {
            width: 500,
            height: 850,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
        };

        return (
            <div style={{overflowX: 'auto'}}>
                <form onSubmit={this.handleSubmit}>
                    <List style={flexContainer}>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Hello! I'm [name].</InputLabel>
                                    <Input id="greeting"
                                           value={this.state.greeting}
                                           onChange={this.handleChange('greeting')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.greetingOptional}
                                        onChange={this.handleChangeCheckbox('greetingOptional')}
                                        value="greetingOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient"
                                           value={this.state.posPatient}
                                           onChange={this.handleChange('posPatient')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional}
                                        onChange={this.handleChangeCheckbox('posPatientOptional')}
                                        value="posPatientOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient"
                                           value={this.state.neutPatient}
                                           onChange={this.handleChange('neutPatient')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional')}
                                        value="neutPatientOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient"
                                           value={this.state.negPatient}
                                           onChange={this.handleChange('negPatient')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional}
                                        onChange={this.handleChangeCheckbox('negPatientOptional')}
                                        value="negPatientOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Nice to see you! Let's begin.</InputLabel>
                                    <Input id="greeting2"
                                           value={this.state.greeting2}
                                           onChange={this.handleChange('greeting2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.greetingOptional2}
                                        onChange={this.handleChangeCheckbox('greetingOptional2')}
                                        value="greetingOptional2"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient2"
                                           value={this.state.posPatient2}
                                           onChange={this.handleChange('posPatient2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional2}
                                        onChange={this.handleChangeCheckbox('posPatientOptional2')}
                                        value="posPatientOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient2"
                                           value={this.state.neutPatient2}
                                           onChange={this.handleChange('neutPatient2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional2}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional2')}
                                        value="neutPatientOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient2"
                                           value={this.state.negPatient2}
                                           onChange={this.handleChange('negPatient2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional2}
                                        onChange={this.handleChangeCheckbox('negPatientOptional2')}
                                        value="negPatientOptional2"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Any chart updates?</InputLabel>
                                    <Input id="chart"
                                           value={this.state.chart}
                                           onChange={this.handleChange('chart')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.chartOptional}
                                        onChange={this.handleChangeCheckbox('chartOptional')}
                                        value="chartOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient3"
                                           value={this.state.posPatient3}
                                           onChange={this.handleChange('posPatient3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional3}
                                        onChange={this.handleChangeCheckbox('posPatientOptional3')}
                                        value="posPatientOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient3"
                                           value={this.state.neutPatient3}
                                           onChange={this.handleChange('neutPatient3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional3}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional3')}
                                        value="neutPatientOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient3"
                                           value={this.state.negPatient3}
                                           onChange={this.handleChange('negPatient3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional3}
                                        onChange={this.handleChangeCheckbox('negPatientOptional3')}
                                        value="negPatientOptional3"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Can you elaborate?</InputLabel>
                                    <Input id="chart2"
                                           value={this.state.chart2}
                                           onChange={this.handleChange('chart2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.chartOptional2}
                                        onChange={this.handleChangeCheckbox('chartOptional2')}
                                        value="chartOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Good to hear!</InputLabel>
                                    <Input id="chart3"
                                           value={this.state.chart3}
                                           onChange={this.handleChange('chart3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.chartOptional3}
                                        onChange={this.handleChangeCheckbox('chartOptional3')}
                                        value="chartOptional3"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient4"
                                           value={this.state.posPatient4}
                                           onChange={this.handleChange('posPatient4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional4}
                                        onChange={this.handleChangeCheckbox('posPatientOptional4')}
                                        value="posPatientOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient4"
                                           value={this.state.neutPatient4}
                                           onChange={this.handleChange('neutPatient4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional4}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional4')}
                                        value="neutPatientOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient4"
                                           value={this.state.negPatient4}
                                           onChange={this.handleChange('negPatient4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional4}
                                        onChange={this.handleChangeCheckbox('negPatientOptional4')}
                                        value="negPatientOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient5"
                                           value={this.state.posPatient5}
                                           onChange={this.handleChange('posPatient5')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos5')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional5}
                                        onChange={this.handleChangeCheckbox('posPatientOptional5')}
                                        value="posPatientOptional5"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient5"
                                           value={this.state.neutPatient5}
                                           onChange={this.handleChange('neutPatient5')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut5')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional5}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional5')}
                                        value="neutPatientOptional5"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient5"
                                           value={this.state.negPatient5}
                                           onChange={this.handleChange('negPatient5')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg5')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional5}
                                        onChange={this.handleChangeCheckbox('negPatientOptional5')}
                                        value="negPatientOptional5"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>What brings you in today?</InputLabel>
                                    <Input id="problem"
                                           value={this.state.problem}
                                           onChange={this.handleChange('problem')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional}
                                        onChange={this.handleChangeCheckbox('problemOptional')}
                                        value="problemOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient6"
                                           value={this.state.posPatient6}
                                           onChange={this.handleChange('posPatient6')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos6')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional6}
                                        onChange={this.handleChangeCheckbox('posPatientOptional6')}
                                        value="posPatientOptional6"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient6"
                                           value={this.state.neutPatient6}
                                           onChange={this.handleChange('neutPatient6')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut6')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional6}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional6')}
                                        value="neutPatientOptional6"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient6"
                                           value={this.state.negPatient6}
                                           onChange={this.handleChange('negPatient6')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg6')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional6}
                                        onChange={this.handleChangeCheckbox('negPatientOptional6')}
                                        value="negPatientOptional6"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-up questions.</InputLabel>
                                    <Input id="problem2"
                                           value={this.state.problem2}
                                           onChange={this.handleChange('problem2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional2}
                                        onChange={this.handleChangeCheckbox('problemOptional2')}
                                        value="problemOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Do you mind if I take a look?</InputLabel>
                                    <Input id="problem3"
                                           value={this.state.problem3}
                                           onChange={this.handleChange('problem3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional3}
                                        onChange={this.handleChangeCheckbox('problemOptional3')}
                                        value="problemOptional3"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient7"
                                           value={this.state.posPatient7}
                                           onChange={this.handleChange('posPatient7')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos7')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional7}
                                        onChange={this.handleChangeCheckbox('posPatientOptional7')}
                                        value="posPatientOptional7"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient7"
                                           value={this.state.neutPatient7}
                                           onChange={this.handleChange('neutPatient7')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut7')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional7}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional7')}
                                        value="neutPatientOptional7"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient7"
                                           value={this.state.negPatient7}
                                           onChange={this.handleChange('negPatient7')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg7')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional7}
                                        onChange={this.handleChangeCheckbox('negPatientOptional7')}
                                        value="negPatientOptional7"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient8"
                                           value={this.state.posPatient8}
                                           onChange={this.handleChange('posPatient8')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos8')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional8}
                                        onChange={this.handleChangeCheckbox('posPatientOptional8')}
                                        value="posPatientOptional8"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient8"
                                           value={this.state.neutPatient8}
                                           onChange={this.handleChange('neutPatient8')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut8')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional8}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional8')}
                                        value="neutPatientOptional8"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient8"
                                           value={this.state.negPatient8}
                                           onChange={this.handleChange('negPatient8')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg8')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional8}
                                        onChange={this.handleChangeCheckbox('negPatientOptional8')}
                                        value="negPatientOptional8"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Additional concerns?</InputLabel>
                                    <Input id="problem4"
                                           value={this.state.problem4}
                                           onChange={this.handleChange('problem4')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional4}
                                        onChange={this.handleChangeCheckbox('problemOptional4')}
                                        value="problemOptional4"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient9"
                                           value={this.state.posPatient9}
                                           onChange={this.handleChange('posPatient9')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos9')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional9}
                                        onChange={this.handleChangeCheckbox('posPatientOptional9')}
                                        value="posPatientOptional9"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient9"
                                           value={this.state.neutPatient9}
                                           onChange={this.handleChange('neutPatient9')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut9')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional9}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional9')}
                                        value="neutPatientOptional9"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient9"
                                           value={this.state.negPatient9}
                                           onChange={this.handleChange('negPatient9')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg9')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional9}
                                        onChange={this.handleChangeCheckbox('negPatientOptional9')}
                                        value="negPatientOptional9"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Do you have a family history of [disease]?</InputLabel>
                                    <Input id="history"
                                           value={this.state.history}
                                           onChange={this.handleChange('history')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.historyOptional}
                                        onChange={this.handleChangeCheckbox('historyOptional')}
                                        value="historyOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient10"
                                           value={this.state.posPatient10}
                                           onChange={this.handleChange('posPatient10')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos10')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional10}
                                        onChange={this.handleChangeCheckbox('posPatientOptional10')}
                                        value="posPatientOptional10"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient10"
                                           value={this.state.neutPatient10}
                                           onChange={this.handleChange('neutPatient10')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut10')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional10}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional10')}
                                        value="neutPatientOptional10"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient10"
                                           value={this.state.negPatient10}
                                           onChange={this.handleChange('negPatient10')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg10')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional10}
                                        onChange={this.handleChangeCheckbox('negPatientOptional10')}
                                        value="negPatientOptional10"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Tell me more.</InputLabel>
                                    <Input id="history2"
                                           value={this.state.history2}
                                           onChange={this.handleChange('history2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.historyOptional2}
                                        onChange={this.handleChangeCheckbox('historyOptional2')}
                                        value="historyOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Good to know.</InputLabel>
                                    <Input id="history3"
                                           value={this.state.history3}
                                           onChange={this.handleChange('history3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.historyOptional3}
                                        onChange={this.handleChangeCheckbox('historyOptional3')}
                                        value="historyOptional3"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient11"
                                           value={this.state.posPatient11}
                                           onChange={this.handleChange('posPatient11')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos11')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional11}
                                        onChange={this.handleChangeCheckbox('posPatientOptional11')}
                                        value="posPatientOptional11"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient11"
                                           value={this.state.neutPatient11}
                                           onChange={this.handleChange('neutPatient11')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut11')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional11}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional11')}
                                        value="neutPatientOptional11"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient11"
                                           value={this.state.negPatient11}
                                           onChange={this.handleChange('negPatient11')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg11')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional11}
                                        onChange={this.handleChangeCheckbox('negPatientOptional11')}
                                        value="negPatientOptional11"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient12"
                                           value={this.state.posPatient12}
                                           onChange={this.handleChange('posPatient12')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos12')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional12}
                                        onChange={this.handleChangeCheckbox('posPatientOptional12')}
                                        value="posPatientOptional12"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient12"
                                           value={this.state.neutPatient12}
                                           onChange={this.handleChange('neutPatient12')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut12')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional12}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional12')}
                                        value="neutPatientOptional12"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient12"
                                           value={this.state.negPatient12}
                                           onChange={this.handleChange('negPatient12')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg12')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional12}
                                        onChange={this.handleChangeCheckbox('negPatientOptional12')}
                                        value="negPatientOptional12"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Your course of treatment is ...</InputLabel>
                                    <Input id="diagnosis"
                                           value={this.state.diagnosis}
                                           onChange={this.handleChange('diagnosis')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional')}
                                        value="diagnosisOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient13"
                                           value={this.state.posPatient13}
                                           onChange={this.handleChange('posPatient13')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos13')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional13}
                                        onChange={this.handleChangeCheckbox('posPatientOptional13')}
                                        value="posPatientOptional13"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient13"
                                           value={this.state.neutPatient13}
                                           onChange={this.handleChange('neutPatient13')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut13')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional13}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional13')}
                                        value="neutPatientOptional13"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient13"
                                           value={this.state.negPatient13}
                                           onChange={this.handleChange('negPatient13')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg13')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional13}
                                        onChange={this.handleChangeCheckbox('negPatientOptional13')}
                                        value="negPatientOptional13"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Any additional questions?</InputLabel>
                                    <Input id="diagnosis2"
                                           value={this.state.diagnosis2}
                                           onChange={this.handleChange('diagnosis2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional2}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional2')}
                                        value="diagnosisOptional2"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient14"
                                           value={this.state.posPatient14}
                                           onChange={this.handleChange('posPatient14')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos14')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional14}
                                        onChange={this.handleChangeCheckbox('posPatientOptional14')}
                                        value="posPatientOptional14"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient14"
                                           value={this.state.neutPatient14}
                                           onChange={this.handleChange('neutPatient14')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut14')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional14}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional14')}
                                        value="neutPatientOptional14"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient14"
                                           value={this.state.negPatient14}
                                           onChange={this.handleChange('negPatient14')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg14')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional14}
                                        onChange={this.handleChangeCheckbox('negPatientOptional14')}
                                        value="negPatientOptional14"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-up answer.</InputLabel>
                                    <Input id="diagnosis3"
                                           value={this.state.diagnosis3}
                                           onChange={this.handleChange('diagnosis3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional3}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional3')}
                                        value="diagnosisOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Great!</InputLabel>
                                    <Input id="diagnosis4"
                                           value={this.state.diagnosis4}
                                           onChange={this.handleChange('diagnosis4')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional4}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional4')}
                                        value="diagnosisOptional4"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient15"
                                           value={this.state.posPatient15}
                                           onChange={this.handleChange('posPatient15')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos15')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional15}
                                        onChange={this.handleChangeCheckbox('posPatientOptional15')}
                                        value="posPatientOptional15"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient15"
                                           value={this.state.neutPatient15}
                                           onChange={this.handleChange('neutPatient15')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut15')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional15}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional15')}
                                        value="neutPatientOptional15"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient15"
                                           value={this.state.negPatient15}
                                           onChange={this.handleChange('negPatient15')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg15')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional15}
                                        onChange={this.handleChangeCheckbox('negPatientOptional15')}
                                        value="negPatientOptional15"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient16"
                                           value={this.state.posPatient16}
                                           onChange={this.handleChange('posPatient16')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos16')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional16}
                                        onChange={this.handleChangeCheckbox('posPatientOptional16')}
                                        value="posPatientOptional16"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient16"
                                           value={this.state.neutPatient16}
                                           onChange={this.handleChange('neutPatient16')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut16')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional16}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional16')}
                                        value="neutPatientOptional16"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient16"
                                           value={this.state.negPatient16}
                                           onChange={this.handleChange('negPatient16')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg16')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional16}
                                        onChange={this.handleChangeCheckbox('negPatientOptional16')}
                                        value="negPatientOptional16"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Additional instructions.</InputLabel>
                                    <Input id="diagnosis5"
                                           value={this.state.diagnosis5}
                                           onChange={this.handleChange('diagnosis5')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional5}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional5')}
                                        value="diagnosisOptional5"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient17"
                                           value={this.state.posPatient17}
                                           onChange={this.handleChange('posPatient17')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos17')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional17}
                                        onChange={this.handleChangeCheckbox('posPatientOptional17')}
                                        value="posPatientOptional17"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient17"
                                           value={this.state.neutPatient17}
                                           onChange={this.handleChange('neutPatient17')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut17')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional17}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional17')}
                                        value="neutPatientOptional17"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient17"
                                           value={this.state.negPatient17}
                                           onChange={this.handleChange('negPatient17')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg17')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional17}
                                        onChange={this.handleChangeCheckbox('negPatientOptional17')}
                                        value="negPatientOptional17"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Take care!</InputLabel>
                                    <Input id="diagnosis6"
                                           value={this.state.diagnosis6}
                                           onChange={this.handleChange('diagnosis6')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional6}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional6')}
                                        value="diagnosisOptional6"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posPatient18"
                                           value={this.state.posPatient18}
                                           onChange={this.handleChange('posPatient18')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPos18')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posPatientOptional18}
                                        onChange={this.handleChangeCheckbox('posPatientOptional18')}
                                        value="posPatientOptional18"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutPatient18"
                                           value={this.state.neutPatient18}
                                           onChange={this.handleChange('neutPatient18')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeut18')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutPatientOptional18}
                                        onChange={this.handleChangeCheckbox('neutPatientOptional18')}
                                        value="neutPatientOptional18"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negPatient18"
                                           value={this.state.negPatient18}
                                           onChange={this.handleChange('negPatient18')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNeg18')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negPatientOptional18}
                                        onChange={this.handleChangeCheckbox('negPatientOptional18')}
                                        value="negPatientOptional18"
                                    />
                                </div>
                            </Card>
                        </ListItem>

                        <ListItem>
                            <Card style={flexItem}>
                                <input type="submit" value="Submit" />
                            </Card>
                        </ListItem>
                    </List>
                </form>
            </div>
        );
    }
}

function TypographyPage({ ...props }) {
    return (
        <div>
            <PageHeader/>
            <Grid container>
                <DialogueForm/>
            </Grid>
            <PageFooter/>
        </div>
    );
}

export default withStyles(style)(TypographyPage);
