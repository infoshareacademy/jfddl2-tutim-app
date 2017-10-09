import React from 'react'
import {Grid, Row, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'


class AddIngredientForm extends React.Component {

    state = {
        ingredientsFormControlValue: '',
        ingredientsFormControlUrl: '',
        ingredientsFormControlTitle: '',
        ingredientsFormControlKcal: ''
    }

    handleIngredientFormControlChange = event => {
        this.setState({
            ingredientsFormControlValue: event.target.value,

        })
    }

    handleIngredientFormControlChange2 = event => {
        this.setState({
            ingredientsFormControlUrl: event.target.value,

        })
    }

    handleIngredientFormControlChange3 = event => {
        this.setState({
            ingredientsFormControlTitle: event.target.value,

        })
    }

    handleIngredientFormControlChange4 = event => {
        this.setState({
            ingredientsFormControlKcal: event.target.value,

        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.addIngredient(this.state.ingredientsFormControlValue)


        this.setState({
            ingredientsFormControlValue: '',

        })
    }

    handleSubmit2 = event => {
        event.preventDefault()

        this.props.addIngredient(this.state.ingredientsFormControlUrl)


        this.setState({
            ingredientsFormControlUrl: '',

        })
    }

    handleSubmit3 = event => {
        event.preventDefault()

        this.props.addIngredient(this.state.ingredientsFormControlTitle)


        this.setState({
            ingredientsFormControlTitle: '',

        })
    }

    handleSubmit4 = event => {
        event.preventDefault()

        this.props.addIngredient(this.state.ingredientsFormControlKcal)


        this.setState({
            ingredientsFormControlKcal: ''

        })
    }

    render() {
        return (
            <form>
                <Grid>
                    <Row>
                        <FormGroup controlId="newId">
                            <ControlLabel>Nazwa dania</ControlLabel>
                            <FormControl componentClass="textarea" placeholder=""
                                         value={this.state.ingredientsFormControlTitle}
                                         onChange={this.handleIngredientFormControlChange3}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button onClick={this.handleSubmit3} bsStyle="primary">
                            Dodaj nazwę</Button>
                    </Row>
                </Grid>

                <Grid>
                    <Row>
                        <FormGroup controlId="newId">
                            <ControlLabel>Liczba kalorii</ControlLabel>
                            <FormControl componentClass="textarea" placeholder=""
                                         value={this.state.ingredientsFormControlKcal}
                                         onChange={this.handleIngredientFormControlChange4}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button onClick={this.handleSubmit4} bsStyle="primary">
                            Dodaj</Button>
                    </Row>
                </Grid>


                <Grid>
                    <Row>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Dodaj przepis</ControlLabel>
                            <FormControl componentClass="textarea" placeholder=""
                                         value={this.state.ingredientsFormControlValue}
                                         onChange={this.handleIngredientFormControlChange}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button onClick={this.handleSubmit} bsStyle="primary">
                            Dodaj przepis</Button>
                    </Row>
                </Grid>


                <Grid>
                    <Row>
                        <FormGroup controlId="newId">
                            <ControlLabel>Dodaj URL zdjęcia</ControlLabel>
                            <FormControl componentClass="textarea" placeholder=""
                                         value={this.state.ingredientsFormControlUrl}
                                         onChange={this.handleIngredientFormControlChange2}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button onClick={this.handleSubmit2} bsStyle="primary">
                            Dodaj zdjęcie</Button>
                    </Row>
                </Grid>

            </form>

        )
    }
}

export default AddIngredientForm