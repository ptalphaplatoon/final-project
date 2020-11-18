import React from 'react'
import {Form, Button} from 'reactstrap'

function Comments (props){
  return(
    <Form onSubmit={handelSubmit}>

      <Form.Group controlId="author">
        <Form.Label>Author: Me</Form.Label>
      </Form.Group>

      <Form.Group controlId="comment">
        <Form.Label>Comment</Form.Label>
        <br/>
        <Form.Control htmlSize={3}/>
      </Form.Group>

      <Button className={'comment-submit'} type="submit">
        Post
      </Button>

    </Form>
  )
}

export default Comments
