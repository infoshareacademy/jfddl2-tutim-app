import React from 'react'
import {Grid, Row, Button, FormGroup, ControlLabel, FormControl, Alert} from 'react-bootstrap'


class AddIngredientForm extends React.Component {

    state = {
        isNewMealValid: true,
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

    handleSubmitMain = event => {
        event.preventDefault()

        let newMeal = {
            uid: Date.now(), // @TODO can be improved
            name: this.state.ingredientsFormControlTitle,
            kcal: this.state.ingredientsFormControlKcal,
            recipe: this.state.ingredientsFormControlValue
        }

        let isNewMealValid = true;

        for (let variable in newMeal) {
            if(!newMeal[variable]) {
                isNewMealValid = false;
                break;
            }
        }

        this.setState({
            isNewMealValid: isNewMealValid,
        })

        if(isNewMealValid){
            // dodajemy obiekt od storage
            // mozemy wyswietlic alert kotry zniknie po kilku s (setTimeout)
            // wyczyscuic caly state odnoszacy sie do tych pol

            this.props.addRecipe(newMeal)
        }
    }

    render() {
        const invalidInput = <Alert bsStyle="danger">
            Złe wartości!
        </Alert>

        return (
            <div>
                {this.state.isNewMealValid ? null : invalidInput}
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
                </Grid>


                <Button onClick={this.handleSubmitMain}> Dodaj posiłek </Button>
            </form>
            </div>
        )
    }
}

export default AddIngredientForm