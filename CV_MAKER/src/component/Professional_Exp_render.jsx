import React from 'react'

function Professional_Exp_render(props) {

    let render_info = props.render_info;
    let isEditing = props.isEditing;
    let allow_editing = props.allow_editing;
    let current = props.current;
    let setCurrent = props.setCurrent;
  return (
    <>
       <ul className='w-full'>
        {render_info.map((form,index)=>{
            return (
                
                 <li key={form.id} className='flex w-full' >
                    <div className='className="bg-gray-50 border border-gray-300 m-4 mr-4 
                              text-gray-900 text-sm rounded-lg focus:ring-blue-500
                              focus:border-blue-500 block w-full p-2.5
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    Job Title: {form.JobTitle}<br/>
                    Company: {form.Company}<br/>
                    Duration: {form.start_date}<span>{"-"}</span>{form.end_date}
                    </div>
                    <div className='flex justify-end items-center'>
                    <button
                           type="button"
                           className="text-white bg-blue-700 
                                       hover:bg-blue-800 focus:ring-4 focus:outline-none
                                       focus:ring-blue-300 font-medium rounded-lg text-sm w-full
                                         sm:w-auto px-5 py-2.5 text-center
                                       dark:bg-blue-600 dark:hover:bg-blue-700
                                       dark:focus:ring-blue-800 mx-6"
                            onClick={(e) => {
                                       e.preventDefault();
                                       props.setCurrent(index)
                                       
                                       allow_editing();
                                }}
                    >Edit</button>
                    </div>
                </li>
                
            )
        })}
        </ul>
    </>
  )
}

export default Professional_Exp_render