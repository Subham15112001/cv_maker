import React from 'react'
import uniqid from 'uniqid';

function RenderProfessionalCV({data}) {
  let info = [...data];
  let entry = info.map((value)=>{
    return ( <Render_obj key={uniqid()} props = {value}/>)
  });
  return (
    <>
    {entry}
    </>
  )
}

function Render_obj({props}){
  return (
    <>
     <div className="entry">
      <div className="city-jobTitle-company">
        {Object.entries(props).map(([key,value])=>{
          if(value !== props.form){
            if(key == 'JobTitle' || key == 'Company'){
              return (
                <p key={key} className={key}>{value}</p>
              )
            }
          }
        })}
      </div>
      <div className="cv-dates">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'start_date' || key == 'end_date') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
      <div className="cv-mainTasks">
        {Object.entries(props).map(([key, value]) => {
          if (value !== props.form) {
            if (key == 'Description') {
              return (
                <p key={key} className={key}>
                  {props[key]}
                </p>
              );
            }
          }
        })}
      </div>
     </div>
    </>
  )
}

export default RenderProfessionalCV