/*import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    return <EventDetails event={this.props.event} />
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent})(EventDetailsContainer)*/


/*import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.PureComponent {
  state = { editMode: false }
  
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }
  
  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    })
  }
  
  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }
  
  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }
  
  render() {
    const {match, event} = this.props
    return (<EventDetails 
      event={event && match.params.id == event.id && event} 
      onEdit={this.onEdit}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      onDelete={this.onDelete}
      editMode={this.state.editMode}
      formValues={this.state.formValues}
    />)
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, updateEvent, deleteEvent})(EventDetailsContainer)*/


/*import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    return <EventDetails
    onDelete={this.onDelete} 
    event={this.props.event} />
  }
}

const mapStateToProps = state => ({
  event: state.event
})

onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

export default connect(mapStateToProps, {loadEvent, deleteEvent})(EventDetailsContainer)*/

import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.PureComponent {
  state = { editMode: false }
  
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }
  
  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    })
  }
  
  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }
  
  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }
  
  render() {
    const {match, event} = this.props
    return (<EventDetails 
      event={event && match.params.id == event.id && event} 
      onEdit={this.onEdit}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      onDelete={this.onDelete}
      editMode={this.state.editMode}
      formValues={this.state.formValues}
    />)
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, updateEvent, deleteEvent})(EventDetailsContainer)

