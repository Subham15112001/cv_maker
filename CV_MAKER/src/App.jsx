import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General_Info from './component/General_Info.jsx';
import Education_Exp from './component/Education_Exp.jsx';
import Professional_Exp from './component/Professional_Exp.jsx';
import Download_button from './component/Download_button.jsx';
import Render_pdf from './component/Render_pdf.jsx';


function App() {

  //store information of person cv
  const [General_Information,setGeneral_Information] = useState({});
  const [Education_Experience,setEducation_Experience] = useState([]);
  const [Pro_Experience,setPro_Experience] = useState([]);
 
  //edit and delete render
  const [GIedit,setGIedit] = useState(false);
  const [EIedit,setEIedit] = useState(false);
  const [PEedit,setPEedit] = useState(false);
  
  //current element to delete or edit
  const [EIcurrent,setEIcurrent] = useState(null);
  const [PEcurrent,setPEcurrent] = useState(null);
 
  //re render
  const [re_render,setRe_render] = useState(true);

  //save info
  let save_input_form = (obj) => {
    switch (obj.form) {
      case "General_Information":

        setGeneral_Information({ ...obj });
        console.log(obj)
        setGIedit(false);
        break;

      case "Education_Exp":

        if (EIedit) {
          Education_Experience[EIcurrent] = obj;
          setEducation_Experience(Education_Experience);
          setEIedit(false);
        } else {
          setEducation_Experience((value) => {
            let array_temp = [...value,obj];
           // console.log(array_temp)
            return array_temp;
          })
          
        }

        break;

       case  "Professional_Exp":
        if (PEedit) {
          Pro_Experience[PEcurrent] = obj;
          setPro_Experience(Education_Experience);
          setPEedit(false);
        } else {
          setPro_Experience((value) => {
            let array_temp1 = [...value,obj];
           // console.log(array_temp)
            return array_temp1;
          })
          
        }
        
        break;
    }
  }

  let delete_info = (obj) => {
    switch (obj.form) {
      case "General_Information":
        setGeneral_Information({});
        break;

      case "Education_Exp":

        let temp_array = Education_Experience.filter((value, index) => {
          if (index !== EIcurrent) {
            return true;
          }
          return false;
        })

        setEducation_Experience(temp_array);
        setEIcurrent(null)
        setEIedit(false)
        break;

       case "Professional_Exp":

        let temp_array_1 = Education_Experience.filter((value, index) => {
          if (index !== PEcurrent) {
            return true;
          }
          return false;
        })

        setEducation_Experience(temp_array_1);
        setPEcurrent(null);
        setPEedit(false);
        break;
    }
  }

  useEffect(()=>{
   setRe_render(false);
   setRe_render(true);
   console.log(Education_Experience)
  },[Education_Experience.length,General_Information,Pro_Experience.length])

  return (
    <>
      <div className='  flex justify-center
                         dark:bg-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         bg-gray-50 border border-gray-300
                         text-black  text-lg 
                           rounded-lg   w-full p-2.5'

      ><h1>Create Your CV</h1>
      </div>
    <div className='flex m-0 p-0'>
      <div className='flex-1 min-h-screen m-0 p-0 w-full bg-black'>
    {/* personal information */}
      <div className='w-full bg-black  p-4'>
        <General_Info 
        isEditing = {GIedit}
        save_info = {save_input_form}
        delete_info = {delete_info}
        info = {General_Information}
        allow_editing = {()=> setGIedit((!GIedit))}
        />
      </div>
    {/* create Educational information */}
      <div className='w-full bg-black  p-4 mt-0'>
        <Education_Exp
        isEditing = {EIedit}
        save_info = {save_input_form}
        delete_info = {delete_info}
        info = {Education_Experience}
        allow_editing = {()=> setEIedit((!EIedit))}
        current = {EIcurrent}
        setCurrent = {(value) => setEIcurrent(value)}
        />
      </div>

     {/*create  personal experience form */}
     <div className='w-full bg-black  p-4 mt-0'>
      <Professional_Exp
        isEditing = {PEedit}
        save_info = {save_input_form}
        delete_info = {delete_info}
        info = {Pro_Experience}
        allow_editing = {()=> setPEedit((!PEedit))}
        current = {PEcurrent}
        setCurrent = {(value)=>setPEcurrent(value) }
      />
     </div>

     </div>
        <div className='flex-1 min-h-screen m-0 p-0 w-11/12 bg-white'>
         
          <Download_button />
          <div className='border-4 border-solid border-black m-2 rounded'>
          {(<Render_pdf
           General_Information = {General_Information}
           Pro_Experience = {Pro_Experience}
           Education_Experience = {Education_Experience}
          />)}
          </div>
        </div>
     </div>
    </>
  )
}

export default App
