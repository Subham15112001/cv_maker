import React from 'react'
import uid from 'uniqid'
function Pdf_basic_info({data}) {
   
  let obj = {...data};
  if(Object.entries(obj).length !== 0){
    obj.firstname = obj.firstname + " " + obj.lastname;
    delete obj.lastname;
  }
  return (
    <>
      {Object.entries(obj).map(([key, value]) => {

        if (value!== data.form && value!==data.id && value != "undefined") {
          return (
            <p className={key} key={uid()}>{value}</p>
          )
        }
       })
      }
    </>
  )
}

export default Pdf_basic_info