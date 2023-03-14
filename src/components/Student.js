import React from 'react'
import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
      <h1>{props.name} {props.age}</h1>
      {/* <h2>{props.age}</h2> */}
    </div>
  )
}

Student.prototype = {
    name:propTypes.string,
    age:propTypes.number
}

export default Student
