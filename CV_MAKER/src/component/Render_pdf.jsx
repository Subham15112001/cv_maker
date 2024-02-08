import React from 'react'
import Pdf_basic_info from './Pdf_basic_info';
import RenderEducationCV from './RenderEducationCV';
import RenderProfessionalCV from './RenderProfessionalCV';

function Render_pdf(props) {

    let General_Information = props.General_Information;
    let Pro_Experience = props.Pro_Experience;
    let Education_Experience = props.Education_Experience;

    let show_ge = (Object.entries(General_Information).length !== 0);

  return (
    <>
          <div className='cv-section' id='cv-report'>
              <div className='cv-basic-info'>
                  {show_ge && (<Pdf_basic_info
                      data={General_Information}
                  />)}
              </div>
              <div className="cv-education-info">
                  {Education_Experience.length > 0 && <p className="cv-section-title">Education</p>}
                  <RenderEducationCV data={Education_Experience} />
              </div>
              <div className="cv-pro-info">
                  {Pro_Experience.length > 0 && (
                      <p className="cv-section-title">Professional Expercience</p>
                  )}
                  <RenderProfessionalCV data={Pro_Experience} />
              </div>
          </div>
    </>
  )
}

export default Render_pdf