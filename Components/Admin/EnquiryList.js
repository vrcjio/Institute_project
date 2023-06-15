"use client"
import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const EnquiryList = () => {
    const [candidate, setCadidte] = useState([
        {  
             id:1,
            name:"Vikash Kumravat",
            contact:"+91 849304",
            interested:"Course1",
            callStatus : false
        },
        {
            id:2,
            name:"Aarti Kanna",
            contact:"+91 483953",
            interested:"Course2",
            callStatus : true
        },
        {
            id:3,
            name:"Yesh Gehlot",
            contact:"+91 959495",
            interested:"Course5",
            callStatus : false
        },
        {
            id:4,
            name:"Shivam Birla",
            contact:"+91 598403",
            interested:"Course3",
            callStatus : false
        }
    ]);


  const callDone = (person) =>{
    (person.callStatus)? person.callStatus=false:person.callStatus=true;

    let index = candidate.findIndex(obj => obj.id === person.id);
        candidate.splice(index,1,person)
        setCadidte([...candidate])
    console.log("person is : ", index);
  }
  return (
    <>
    <Container className="card mt-1 shadow">
        <Table striped hover>
            <thead>
                <tr className='align-items-start'>
                    <th>Call Done</th>
                    <th>Name</th>
                    <th>Interested</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {
                    candidate &&
                        candidate.sort((a,b)=>1 * a.name.localeCompare(b.name)).map((person,id)=>{
                            return(
                                <>
                                <tr key={id}>
                                    <td>{person.callStatus ?<><CheckIcon onClick={()=>callDone(person)} className='text-success'/>Done</> : <><ClearIcon onClick={()=>callDone(person)} style={{cursor:"pointer"}}/>No Call</> }</td>
                                    <td>{person.name}</td>
                                    <td>{person.interested}</td>
                                    <td>{person.contact}</td>
                                </tr>                                    
                                </>
                            )
                        })
                }
            </tbody>
        </Table >
        </Container>
    </>
  )
}

export default EnquiryList