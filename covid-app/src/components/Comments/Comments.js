import React from 'react';
import { Form, Button } from 'react-bootstrap'



export const Comments = (props) => {
  

  // Will handle the submission of author and comments
  const handelSubmit =(e)=>{
    e.preventDefault()
    console.log(`Author: ${e.target.author.value}, Comments: ${e.target.textarea1.value}`)
    props.close()
  }

  return (
    <Form onSubmit={handelSubmit}>

    <Form.Group controlId="author">
      <Form.Label>Author:</Form.Label>
      {/* The name will autofill with the signed in user */}
      <Form.Control defaultValue={"John Smith"} readOnly/>
    </Form.Group>


    <Form.Group controlId="textarea1">
      <Form.Label>Comment:</Form.Label><br/>
      <Form.Control as="textarea" rows={10} cols={50}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
};
export default Comments;

