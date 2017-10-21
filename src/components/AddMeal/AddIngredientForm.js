import React from 'react'
import {Grid, Row, Button, FormGroup, ControlLabel, FormControl, Alert} from 'react-bootstrap'


class AddIngredientForm extends React.Component {

    state = {
        mealAdded: false,
        isNewMealValid: true,
        ingredientsFormControlValue: '',
        ingredientsFormControlCategory: '',
        ingredientsFormControlUrl: '',
        ingredientsFormControlTitle: '',
        ingredientsFormControlKcal: ''
    }

    handleIngredientFormControlChange = event => {
        this.setState({
            ingredientsFormControlValue: event.target.value,

        })
    }

    handleIngredientFormControlChange5 = event => {
        this.setState({
            ingredientsFormControlCategory: event.target.value,

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
            recipe: this.state.ingredientsFormControlValue,
            category: this.state.ingredientsFormControlCategory
        }

        let isNewMealValid = true;

        for (let variable in newMeal) {
            if (!newMeal[variable]) {
                isNewMealValid = false;
                break;
            }
        }

        this.setState({
            isNewMealValid: isNewMealValid,
        })

        if (isNewMealValid) {



            this.props.addRecipe(newMeal)

            this.setState({
                mealAdded: true,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        mealAdded: false,
                    })
                }, 2000)
            })

        }

    };


    render() {

        const invalidInput = <Alert bsStyle="danger">
            Złe wartości!
        </Alert>;

        const mealAdded =    <Alert bsStyle="success">
            Przepis został dodany
        </Alert>;


        return (
            <div className="addMM">
                {this.state.isNewMealValid ? null : invalidInput}
                {this.state.mealAdded ? mealAdded : null}
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
                                   <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Wybierz kategorie posiłku</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" value={this.state.ingredientsFormControlCategory}
                                                 onChange={this.handleIngredientFormControlChange5}>
                                        <option value="Select"></option>
                                        <option value="Śniadanie">Śniadanie</option>
                                        <option value="Obiad">Obiad</option>
                                        <option value="Kolacja">Kolacja</option>
                                    </FormControl>
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