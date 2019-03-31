import React, { Component } from 'react';
import { Form, Container, Header, Icon, Segment } from 'semantic-ui-react';

class NagForm extends Component {

state = { name: '', body: ''}

componentDidMount() {
  if (this.props.id) {
    const { name, body, id } = this.props
    this.setState({ name, body, id })
  }
}

handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault()
  if (this.props.id) {
    this.props.editNag(this.state)
    this.props.toggleEdit()
  } else {
    this.props.addNag(this.state)
  }
  this.setState({ title: '', body: ''})
}

render() {
  const {name, body} = this.state


  return(
    <Container>

    <Header textAlign="center" icon><Icon name="comment outline" />Create a New Nag</Header>
    <Segment raised color="red">
    <Form onSubmit={this.handleSubmit}>
      <Form.Field required>
        <Form.Input
          label='Nag Title'
          name='name'
          placeholder='Enter Title'
          value={name}
          width={6}
          fluid
          onChange={this.handleChange}
           />
      </Form.Field>
      <Form.TextArea 
      required
      label="Nag"
      placeholder='Enter Nag'
      name='body'
      value={body}
      width={9}
      fluid
      onChange={this.handleChange}
       />
       <Form.Button>Submit</Form.Button>
    </Form>
    </Segment>
    </Container>
  );
}
}

export default NagForm;
