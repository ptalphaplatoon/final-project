import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { writeData } from '../api/CovidAppApi'



export const Comments = (props) => {
  const userToken = localStorage.getItem('token')
  const userName = localStorage.getItem('username')


  // Will handle the submission of author and comments
  const handelSubmit = (e) => {
    e.preventDefault()


    let post = {
      title: sessionStorage.getItem('stateName'),
      description: e.target.textarea1.value,
      author: e.target.author.value,
      user: userName
    }


    writeData(post, userToken)
    let value = props.stateChange + 1
    props.setStateChange(value)

    props.close()
  }

  return (
    <Form onSubmit={handelSubmit}>

      <Form.Group controlId="author">
        <Form.Label>Author:</Form.Label>
        {/* The name will autofill with the signed in user */}
        <Form.Control defaultValue={userName} readOnly />
      </Form.Group>


      <Form.Group controlId="textarea1">
        <Form.Label>Comment:</Form.Label><br />
        <Form.Control as="textarea" rows={10} cols={50} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
  );
};
export default Comments;

