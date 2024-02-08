import React from 'react'
import uniqid from 'uniqid';
const Render_obj=({props})=>{
  return (
    <>
    <div className="entry">
      <div className="cv-degree-school">
        {Object.entries(props).map(([key,value])=>{
          if(value !== props.form ){
            if(value == props.school || value == props.degree){
              return (
                <p className={key} id={key}>
                  {value}
                </p>
              )
            }
          }
        })}
      </div>
      <div className='cv-dates'>
        {Object.entries(props).map(([key,value])=>{
          if(value !== props.form){
            if(key == 'start_date' || key == 'end_date'){
              return (
                <p className={key} id={key}>{value}</p>
              )
            }
          }
        })}
      </div>
      <div className='cv-city-country'>
        {Object.entries(props).map(([key,value])=>{
          if(value !== props.form){
            if(key == 'city' || key == 'country'){
              return (
                <p className={key} id={key}>{value}</p>
              )
            }
          }
        })}
      </div>
    </div>
    </>
  )
}

function RenderEducationCV({data}) {
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


export default RenderEducationCV