import React from 'react'
import {Grid, Row, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class AddIngredientForm extends React.Component {

    state = {
        ingredientsInputValue: ''
    }

    handleIngredientInputChange = event => {
        this.setState({
            ingredientsInputValue: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.addIngredient(this.state.ingredientsInputValue)

        this.setState({
            ingredientsInputValue: ''
        })
    }

    render() {
        return (
            <form>
                <Grid>
                    <Row>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button onClick={this.handleSubmit} bsStyle="primary">Dodaj przepis</Button>
                    </Row>
                </Grid>
            </form>

        )
    }
}

export default AddIngredientForm