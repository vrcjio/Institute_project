"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({setShow}) {
    const [user, setUser] = useState({ fullname:"", contact: ""});

    const checkAndSend = (e) =>{
        e.preventDefault();
        let objvalue = e.target.value;
        console.log(objvalue.length)
        setUser({
            
            ...user,
            [e.target.name]:objvalue,
        })
        if(user.fullname.length>3 && user.contact.length >= 8){
            alert("thank You For Submition")
        }
        
        console.log(user)
    }

    console.log("setSHow is : ", setShow)
  return (
    <Form onSubmit={checkAndSend}>
        
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control onChange={checkAndSend} value={user.fullname} type="text" name="fullname" placeholder="Enter Full Name" required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Moblie Number</Form.Label>
        <Form.Control onChange={checkAndSend} value={user.contact} type="password" name="contact" minLength={1000000000} maxLength={99999999999} placeholder="Enter Number" required/>
        <Form.Text className="text-muted">
          We'll never share your contact number with anyone else
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