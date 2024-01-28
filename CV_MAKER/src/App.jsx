import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General_Info from './component/General_Info.jsx';
import Education_Exp from './component/Education_Exp.jsx';

function App() {

  //store information of person cv
  const [General_Information,setGeneral_Information] = useState({});
  const [Education_Experience,setEducation_Experience] = useState([]);
  const [Pro_Experience,setPro_Experience] = useState([]);
  const [Projects,setProjects] = useState([]);

  //edit and delete render
  const [GIedit,setGIedit] = useState(false);
  const [EIedit,setEIedit] = useState(false);
  const [PEedit,setPEedit] = useState(false);
  const [Predit,setPredit] = useState(false);

  //save info
  let save_input_form = (obj) => {
    switch(obj.form){
      case "General_Information":
        
        setGeneral_Information({...obj});
        console.log(obj)
        setGIedit(false);
        break;
    }
  }

  let delete_info = (obj) => {
    switch(obj.form){
      case "General_Information":       
        setGeneral_Information({});       
        break;
    }
  }

  return (
    <>
      <div className='w-2/4 bg-black  p-4'>
        <General_Info 
        isEditing = {GIedit}
        save_info = {save_input_form}
        delete_info = {delete_info}
        info = {General_Information}
        allow_editing = {()=> setGIedit((!GIedit))}
        />
      </div>

      <div className='w-2/4 bg-black min-h-screen p-4 mt-0'>
        <Education_Exp
        isEditing = {EIedit}
        save_info = {save_input_form}
        delete_info = {delete_info}
        info = {Education_Experience}
        allow_editing = {()=> setEIedit((!EIedit))}
        />
      </div>
    </>
  )
}

export default App
