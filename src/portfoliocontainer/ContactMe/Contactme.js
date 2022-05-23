import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Button } from 'bootstrap'
import Axios from 'axios'
export default function Contactme() {
  const [name,setName]=useState(null)
  const [email,setEmail]=useState(null)
  const [messages,setMessages]=useState(null)

  const postData=()=>{
    //get user data
    const data={
      name:name,
    email:email,
    messages:messages
  }
  console.log( JSON.stringify(data))
// Axios.post('https://localhost:5000/contactme',data).then((res)=>{
//   alert("data succesfully Added")
// }).catch((err)=>{
//   console.log(err)
// })

Axios.post("https://amadipatrick.herokuapp.com/contactme",data).then((res)=>{
  alert("data succesfully Added")
  console.log(res)
  console.log("the message"+res.data.message)
  alert("dear"+res.data.data.name+" "+res.data.message)
}).catch((err)=>{
    console.log(err)
  })
}
  
  return (
    
    <>
      <Container>
          <Form>
              <Form.Group>
                  <Form.Label className='text-primary'>Name</Form.Label>
                  <Form.Control type='text' value={name} onChange={(e)=>(
                    
                    setName(e.target.value))} placeholder='Enter Your Name'></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label className='text-primary'>Email Address</Form.Label>
                  <Form.Control type="email" onChange={(e)=>(
                    
                    setEmail(e.target.value))}placeholder='Enter Email'/>
                  <Form.Text className='text-muted'>
                      your email will not be made public
                  </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Control 
                as="textarea"onChange={(e)=>(
                    
                  setMessages(e.target.value))}
                placeholder="messages"
                style={{height:'100px'}}
                >
                  </Form.Control> 
              </Form.Group>

              {/* <button className='btn btn-primary' onClick={(e)=>(postData)}>submit</button> */}
              </Form>    
      </Container>
      <button onClick={postData}>submit</button>

    </>
  )
}
{/* <Row className="mx-0">
<Button as={Col} variant="primary">Button #1</Button>
<Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
<Button as={Col} variant="success">Button #3</Button>
</Row> */}