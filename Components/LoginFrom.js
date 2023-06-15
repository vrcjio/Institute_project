"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({setShow,setChangeContaint}) {
    
    const eventHandler = (e) =>{
        e.preventDefault();
        setChangeContaint("AdminProfile")
        sessionStorage.setItem("adminToken","abcdfjkdjsalf")
       
    }

    console.log("setSHow is : ", setShow)
  return (
    <Form onSubmit={eventHandler}>
        
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Gmail</Form.Label>
        <Form.Control  type="text" name="fullname" placeholder="Enter Gmail" autoFocus required/>
        <Form.Text className="text-muted">
          Enter Valid Email
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" name="contact" placeholder="Enter Password" required/>
        <Form.Text className="text-muted">
          Enter Valid Password
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
          <Button className='float-end' variant="danger" onClick={setShow}>
            Close
          </Button>
    </Form>
  );
}
 
export default LoginForm;