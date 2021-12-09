import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.filterChange(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
            filter <input name="filter_input" onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecs: state.anecs,
    notification: state.notification,
    filter: state.filter,
  }
}

const ConnectedFilter = connect(mapStateToProps, { filterChange })(Filter)
export default ConnectedFilter