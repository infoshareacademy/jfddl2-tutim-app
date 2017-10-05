import React from 'react'

import StudentList from './StudentList'

class Students extends React.Component {

  state = {
    students: null,
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true
    })

    fetch(
      `${process.env.PUBLIC_URL}/data/students.json` // template string usage
    ).then(
      response => response.json()
    ).then(
      students => this.setState({ students, fetching: false })
    ).catch(
      error => this.setState({ error, fetching: false })
    )
  }

  render() {
    const { students, error, fetching } = this.state

    return (
      <div>
        <h1>Students</h1>

        {
          students !== null ?
            null :
            <p>No students to show</p>
        }

        {
          fetching === false ?
            null :
            <p>Fetching students now...</p>
        }

        {
          error === null ?
            null :
            <p>{error.message}</p>
        }

        <StudentList students={students}/>
      </div>
    )
  }
}

export default Students