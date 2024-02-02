
import React,{useCallback, useEffect, useId, useState} from 'react'
import arrow from '../assets/arrow.svg'
import Education_Exp_render from './Education_Exp_render';
import uniqid from 'uniqid';

function Education_Exp(props) {

    const [isActive, setIsAvtive] = useState(false);
    const [isAnimate, setAnimate] = useState(false);
    const [current, setCurrent] = useState(false);
    
    //cause animation
    useEffect(() => {
        if (isActive) {
            setCurrent(isActive);
            const timeoutId = setTimeout(() => {
                setAnimate(true);
            }, 50);
    
            return () => {
                clearTimeout(timeoutId);
            };
        } else {
            setAnimate(false);
            const timeoutId = setTimeout(() => {
                setCurrent(isActive);
            }, 500);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isActive]);

    //variable to store information
    const [degree,setDegree] = useState('');
    const [school,setSchool] = useState('');
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [start_date,setStart_Date] = useState('');
    const [end_date,setEnd_Date] = useState('');
    let [isShown,setisShown] = useState(false);
    
    //fn to store info and send it to Education_Experience array
    function store_info(){
        let obj = {
            degree:degree,
            school:school,
            city:city,
            country:country,
            start_date:start_date,
            end_date:end_date,
            form:"Education_Exp",
            id:uniqid()
        }

        props.save_info(obj);

        //reset
        setDegree("");
        setSchool('');
        setCity('');
        setCountry('');
        setStart_Date('');
        setEnd_Date('');
    }

    //check if function is valid
    function isValid(){
        return (degree !== "" && 
                school !== "" && 
                city !== "" && 
                country !== "" && 
                start_date !== "" && 
                end_date !== "");
    }

    //edit is on   
    useEffect(() => {
        if(props.isEditing){
           let obj = props.info[props.current];
          setDegree(obj.degree);
          setSchool(obj.school);
          setCity(obj.city);
          setCountry(obj.country);
          setStart_Date(obj.start_date);
          setEnd_Date(obj.end_date);
          setisShown(true);
          setIsAvtive(true);
        }
    }, [props.isEditing])
  
  return (
      <>
        {/* header */}
        <div className='grid grid-cols-3 gap-6 w-full m-6'>
               <div 
                className='col-start-1 col-end-3 
                         dark:bg-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         bg-gray-50 border border-gray-300
                         text-black  text-lg 
                           rounded-lg  block w-full p-2.5'
                
                >Education Information</div>
                <div className='col-start-3 col-end-4'>

                    <button type="submit"
                            className={`text-white bg-blue-600
                                        hover:bg-blue-800 focus:ring-4 focus:outline-none
                                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full
                                          sm:w-auto px-12 py-3 text-center
                                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-6`}

                            onClick={() => {
                            setIsAvtive(!isActive);
                        }}
                    >
                        <img className={`transition-transform ${isActive ? `rotate-180` : `rotate-0`}`} src={arrow} alt="down" />
                    </button>
                </div>
        </div>

             {/* input form */}
             {current && (<form      
                                className={` border-1 p-4 border-solid border-blue-700 rounded-lg shadow-lg shadow-blue-500 transition-all  
                                             duration-500 ${isAnimate ? `scale-y-100` : `scale-y-0`} `}>
                <div className="mb-6 mx-6">

                  <label
                      htmlFor="degree"
                      className="block mb-2 
                                 text-sm font-medium text-gray-900
                               dark:text-white"
                  >Degree</label>

                  <input
                         type="text"
                         id="degree"
                         className="bg-gray-50 border border-gray-300
                                    text-gray-900 text-sm rounded-lg
                                    focus:ring-blue-500 focus:border-blue-500 
                                      block w-full p-2.5
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Electrical Engineering"
                         onChange={(e) => setDegree(e.target.value)}
                         value={degree}
                         required
                  />
              </div>

              <div className="mb-6 mx-6">

                  <label
                      htmlFor="degree"
                      className="block mb-2 
                                 text-sm font-medium text-gray-900
                               dark:text-white"
                  >School</label>

                  <input
                         type="text"
                         id="degree"
                         className="bg-gray-50 border border-gray-300
                                    text-gray-900 text-sm rounded-lg
                                    focus:ring-blue-500 focus:border-blue-500 
                                      block w-full p-2.5
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="N.I.T Rourkela"
                         onChange={(e) => setSchool(e.target.value)}
                         value={school}
                         required
                  />
              </div>

              <div className="mb-6 mx-6">

                  <label
                      htmlFor="start"
                      className="block mb-2 
                                 text-sm font-medium text-gray-900
                               dark:text-white"
                  >City</label>

                  <input
                         type="text"
                         id="degree"
                         className="bg-gray-50 border border-gray-300
                                    text-gray-900 text-sm rounded-lg
                                    focus:ring-blue-500 focus:border-blue-500 
                                      block w-full p-2.5
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Bhubaneswar"
                         onChange={(e) => setCity(e.target.value)}
                         value={city}
                         required
                  />
              </div>

              <div className="mb-6 mx-6">

                  <label
                      htmlFor="degree"
                      className="block mb-2 
                                 text-sm font-medium text-gray-900
                               dark:text-white"
                  >Country</label>

                  <input
                         type="text"
                         id="degree"
                         className="bg-gray-50 border border-gray-300
                                    text-gray-900 text-sm rounded-lg
                                    focus:ring-blue-500 focus:border-blue-500 
                                      block w-full p-2.5
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="India"
                         onChange={(e) => setCountry(e.target.value)}
                         value={country}
                         required
                  />
              </div>

              <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6  ">
                  <div className='mt-6'>

                      <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>

                      <input type="date" id="start_date"

                          className="  bg-gray-50 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5
                                       focus:ring-blue-500 focus:border-blue-500 
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                          onChange={(e) => setStart_Date(e.target.value)}
                          value={start_date}
                          required
                      />

                  </div>

                  <div className='mt-6'>

                      <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>

                      <input type="date" id="end_date"

                          className="  bg-gray-50 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5
                                       focus:ring-blue-500 focus:border-blue-500 
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                          onChange={(e) => setEnd_Date(e.target.value)}
                          value={end_date}
                          required
                      />
                   </div>
              </div>

              <div className='flex justify-evenly items-center'>
                    {props.isEditing && (<button 
                            type="button" 
                            className="text-white bg-blue-700 
                                       hover:bg-blue-800 focus:ring-4 focus:outline-none
                                       focus:ring-blue-300 font-medium rounded-lg text-sm w-full
                                         sm:w-auto px-5 py-2.5 text-center
                                       dark:bg-blue-600 dark:hover:bg-blue-700
                                       dark:focus:ring-blue-800 mx-6"
                            onClick={(e)=>{
                                e.preventDefault();
                                console.log(props.info[props.current])
                                props.delete_info(props.info[props.current]);
                               
                            }}           
                    >Delete</button>)}
                    <button 
                            type="submit" 
                            className="text-white bg-blue-700 
                                       hover:bg-blue-800 focus:ring-4 focus:outline-none
                                       focus:ring-blue-300 font-medium rounded-lg text-sm w-full
                                         sm:w-auto px-5 py-2.5 text-center
                                       dark:bg-blue-600 dark:hover:bg-blue-700
                                       dark:focus:ring-blue-800 mx-6"
                            onClick={(e)=>{
                                e.preventDefault();

                                if(isValid()){
                                store_info();
                                setIsAvtive(false);
                                setisShown(true);
                                }
                            }}           
                    >Submit</button>

                </div>
            </form>)}
            <div className='flex justify-center items-center'>
            { isShown && (
            <Education_Exp_render
             render_info = {props.info}
             isEditing = {props.isEditing}
             allow_editing = {props.allow_editing}
             current = {props.current}
             setCurrent = {props.setCurrent}
            />
            )}
            </div>
      </>
  ) 
}

export default Education_Exp