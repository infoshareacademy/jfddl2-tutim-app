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
    const getPlanForMealAndDay = (meal, day) => this.props.planerData.filter((recipe) => recipe.meal === meal && recipe.day === day)

    const renderRecipes = (arrayOfRecipes) => arrayOfRecipes.map((recipe) => <div>{recipe.uid}</div>)

    console.log(renderRecipes(getPlanForMealAndDay(1, 2)))

    return (

      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Posiłek</th>
          <th>Pon</th>
          <th>Wt</th>
          <th>Śr</th>
          <th>Czw</th>
          <th>Pt</th>
          <th>Sob</th>
          <th>Sob</th>
          <th>Nd</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Śniadanie</td>
          <td>
          </td>
          <td>

          </td>
          <td>
            {renderRecipes(getPlanForMealAndDay(1, 2))}
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Śniadanie</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Śniadanie</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  planerData: state.planer.plan
})

export default connect(
  mapStateToProps
)(PlanerTable)