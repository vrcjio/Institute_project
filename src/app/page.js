'use client'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react'
import { EnquiryModel, Web_AdminProfile, Web_Footer, Web_Header, Web_Login, Web_main } from './DaynamicFiles';





const page = () => {
  const [changeContaint, setChangeContaint] = useState();
  console.log("value is : ", changeContaint)
  useEffect(() => {
    setChangeContaint("Main")
  }, [])
  
  return (
    <>

      <EnquiryModel modelView="Enquiry" setChangeContaint={setChangeContaint} />
      <Web_Header setChangeContaint={setChangeContaint} />
      <>
        {(changeContaint === "Main" || changeContaint === "Login") &&
          <>
            {
              (changeContaint === "Login") &&
              <EnquiryModel modelView="Login" setChangeContaint={setChangeContaint} />
            }
            <Web_main />
          </>
          
        }

{
              (changeContaint === "AdminProfile") &&
              <Web_AdminProfile setChangeContaint={setChangeContaint} />
            }
      </>

      <Web_Footer />
    </>
  )
}

export default page