import React from 'react'
import JsPDF from 'jspdf';
function Download_button() {

    const generatePDF = () => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#cv-report')).then(() => {
          report.save('report.pdf');
        });
      };

  return (
    <>
           <div className='flex justify-center items-center m-2'>
                    <button 
                            type="button" 
                            className="text-white bg-blue-700 
                                       hover:bg-blue-800 focus:ring-4 focus:outline-none
                                       focus:ring-blue-300 font-medium rounded-lg text-sm w-full
                                         sm:w-auto px-5 py-2.5 text-center
                                       dark:bg-blue-600 dark:hover:bg-blue-700
                                       dark:focus:ring-blue-800 mx-6"
                            onClick={(e)=>{
                               
                                generatePDF();
                            }}           
                    >Download pdf</button>

                </div>
    </>
  )
}

export default Download_button