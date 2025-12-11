import React from 'react'


export default function Footer() {
  return (<>

<div className="footer-section container-fluid  py-5">
  <div className='footer-section container w-100 d-flex  justify-content-between align-items-center  '>
        <div className=" text-light">
          <h4 className='text-light'>LOCATION</h4>
          <span>2215 John Daniel Drive</span>
          <span>Clark, MO 65243</span>
        </div>
        <div className="text-light">
          <h4>AROUND THE WEB</h4>
          <div className="icons text-light fs-3">
            <i className="fa-brands fa-facebook-f"></i>
            <i  className="fa-brands fa-twitter icon"></i>
            <i  className="fa-brands fa-linkedin-in icon"></i>
            <i  className="fa-solid fa-globe icon"></i>
          </div>
       </div>
      <div className="text-light">
          <h4>ABOUT FREELANCER</h4>
          <span className='d-flex'>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
        </div>
  </div>
          </div>
                <div className="container-fluid w-100 bg-dark py-3 text-center text-light py-2">
                  <p>Copyright © Your Website 2021</p>
          </div>
    </>
  )
}
