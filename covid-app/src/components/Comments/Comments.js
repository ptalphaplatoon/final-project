import React from 'react'
import { Form, Button } from 'react-bootstrap';


function Comments (props){

  const handelSubmit =(e)=>{
    e.preventDefault()
    return(
      console.log('comments')
      )
  }

  return(
    <div>
      <Form onSubmit={handelSubmit}>

        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
        </Form.Group>


        <Form.Group controlId="Textarea1">
          <Form.Label>Comments</Form.Label><br/>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
    </div>
  )
}

export default Comments
