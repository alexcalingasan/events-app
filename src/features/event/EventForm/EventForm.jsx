import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {

  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.createEvent(this.state);
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const {cancelFormIsOpen} = this.props;
    const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            <input value={title} onChange={this.handleInputChange} name='title' placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" value={date} onChange={this.handleInputChange} name='date' placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input value={city} onChange={this.handleInputChange} name='city' placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input value={venue} onChange={this.handleInputChange} name='venue' placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input value={hostedBy} onChange={this.handleInputChange} name='hostedBy' placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={cancelFormIsOpen}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
