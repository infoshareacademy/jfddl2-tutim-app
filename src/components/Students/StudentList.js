import React from 'react'

class StudentList extends React.Component {
  render() {
    const { students } = this.props

    return (
      <ul>
        {
          students && students.map(
            ({ id, name }, index, allStudents) => (
              <li key={id}>{name}</li>
            )
          )
        }
      </ul>
    )
  }
}

export default StudentList