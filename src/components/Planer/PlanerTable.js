import React from 'react'
import {Table} from 'react-bootstrap'

import {connect} from 'react-redux'

import BigCalendar from 'react-big-calendar'
import events from './events'


//
// class PlanerTable extends React.Component{
//   render() {
//     return (
//       <div>
//         <h3 className="callout">
//           Click an event to see more info, or
//           drag the mouse over the calendar to select a date/time range.
//         </h3>
//         <BigCalendar
//           selectable
//           events={events}
//           defaultView='week'
//           scrollToTime={new Date(1970, 1, 1, 6)}
//           defaultDate={new Date(2015, 3, 12)}
//           onSelectEvent={event => alert(event.title)}
//           // onSelectSlot={(slotInfo) => alert(
//           //   `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
//           //   `\nend: ${slotInfo.end.toLocaleString()}`
//           // )}
//         />
//       </div>
//     )
//   }
//
// }


class PlanerTable extends React.Component {
  render() {
    const getRecipeData = (uid) => this.props.recipes.filter((recipe)=> parseInt(recipe.uid) === parseInt(uid) )[0]

    const getPlanForMealAndDay = (meal, day) => this.props.planerData.filter((recipe) => recipe.meal === meal && recipe.day === day)

    const renderRecipes = (arrayOfRecipes) => arrayOfRecipes.map(
      (recipe) => {
        const recipeData = getRecipeData(recipe.uid)
        return recipeData ?
          <div>{recipeData.name} | {recipeData.kcal} //button uid</div>
          :
          null
      }
    )

    const meals = ['Śniadanie', 'Obiad', 'Kolacja']

    const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd']


    return (

      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Posiłek</th>
          {days.map((day) => <th>{day}</th>)}
        </tr>
        </thead>
        <tbody>
        {meals.map((meal,mealIndex) => (
          <tr>
            <td>{meal}</td>
            {days.map((day, dayIndex) => <td>{renderRecipes(getPlanForMealAndDay(mealIndex, dayIndex))}</td>)}
          </tr>
        ))}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  planerData: state.planer.plan,
  recipes: state.recipes.recipes
})

export default connect(
  mapStateToProps
)(PlanerTable)