import React,{useCallback, useEffect, useId, useState} from 'react'
import arrow from '../assets/arrow.svg'
import General_Info_render from './General_Info_render.jsx';

function General_Info(props) {

    //store status to render and animate
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
    

    //store form data
    let [firstname,setFirstName] = useState("");
    let [lastname,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [number,setNumber] = useState("");
    let [address,setAddress] = useState('');
    let [form,setForm] = useState("General_Information");
    let [isShown,setisShown] = useState(false);
    let id = useId();

    //edit is on
    
    useEffect(() => {
        if(props.isEditing){
        setFirstName(props.info?.firstname);
        setLastName(props.info?.lastname);
        setEmail(props.info?.email);
        setNumber(props.info?.number);
        setAddress(props.info?.address);
        setisShown(true);
        setIsAvtive(true);
        }
    }, [props.isEditing])
    

    function store_info(){

        //store in object
        console.log(firstname)
        let obj = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            number:number,
            address:address,
            form:form,
            id:id
        };
        console.log(obj)
        props.save_info(obj);//store it in General_Information
        
        //reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumber("");
        setAddress("");
    }

    function isValid(){
        return (
            firstname !== "" &&
            lastname !== "" &&
            email !== "" &&
            number !== "" &&
            address !== ""
        );
    }
    
    return (

        <div  >
            {/* header */}
            <div className='grid grid-cols-3 gap-6 w-full m-6'>
                <div 
                className='col-start-1 col-end-3 
                         dark:bg-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         bg-gray-50 border border-gray-300
                         text-black  text-lg 
                           rounded-lg  block w-full p-2.5'
                
                >Contact Information</div>
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

                <div className="grid gap-6 mb-6 md:grid-cols-2 mx-6  ">

                    <div className='mt-6'>

                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>

                        <input type="text" id="first_name"
                               className="  bg-gray-50 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5
                                            focus:ring-blue-500 focus:border-blue-500 
                                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Subham"
                               onChange={(e)=> setFirstName(e.target.value)}
                               value = {firstname}
                               required 
                        />

                    </div>

                    <div className='mt-6'>
                        <label 
                               htmlFor="last_name" 
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Last name</label>

                        <input 
                              type="text" 
                              id="last_name" 
                              className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg
                                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder="Behera" 
                              onChange={(e)=> setLastName(e.target.value)}
                              value={lastname}
                              required 
                        />
                    </div>

                    <div>

                        <label 
                               htmlFor="phone" 
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Phone number</label>

                        <input   
                               type="tel" 
                               id="phone" 
                               className="bg-gray-50 border border-gray-300
                                          text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                          focus:border-blue-500 block w-full p-2.5
                                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="123-455-6789" 
                               pattern="^[0-9]{10}$" 
                               onChange={(e)=> setNumber((e.target.value).toString())}
                               value={number}
                               required 
                        />
                    </div>


                </div>
                <div className="mb-6 mx-6">

                    <label 
                           htmlFor="email" 
                           className="block mb-2 
                                      text-sm font-medium text-gray-900
                                      dark:text-white"
                    >Email address</label>

                    <input 
                           type="email" 
                           id="email" 
                           className="bg-gray-50 border border-gray-300
                                      text-gray-900 text-sm rounded-lg
                                      focus:ring-blue-500 focus:border-blue-500 
                                      block w-full p-2.5
                                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           placeholder="sinchan889377888@gmail.com" 
                           onChange={(e)=> setEmail(e.target.value)}
                           value={email}
                           required 
                    />
                </div>

                <div className='mx-6 mb-6'>

                    <label 
                          htmlFor="address" 
                          className="block mb-2 
                                     text-sm font-medium text-gray-900
                                     dark:text-white"
                    >Address</label>

                    <input type="text" 
                           id="address" 
                           className="bg-gray-50 border border-gray-300
                                      text-gray-900 text-sm rounded-lg
                                      focus:ring-blue-500 focus:border-blue-500 
                                      block w-full p-2.5 dark:bg-gray-700
                                      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             placeholder="Address" 
                             onChange={(e)=> setAddress(e.target.value)}
                             value={address}
                             required 
                    />

                </div>

                <div className='flex justify-center items-center'>
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
                                if (isValid()) {
                                    store_info();
                                    setisShown(true);
                                    setIsAvtive(false);
                                }
                            }}           
                    >Submit</button>

                </div>
            </form>)}
            {/* render info */}
            <div className='flex justify-center items-center'>
            { isShown && (
            <General_Info_render
             render_info = {props.info}
             isEditing = {props.isEditing}
             allow_editing = {props.allow_editing}
            />
            )}
            </div>
        </div>
    )
}

export default General_Info