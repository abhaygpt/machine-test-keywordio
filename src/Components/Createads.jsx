import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Createads = () => {

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  let [storevalue, setsotrevalue] = useState()

  let textmediachk = () => {
    console.log("hello1")
    setsotrevalue("textform")
  }

  let mediachk = () => {
    setsotrevalue("mediaform")
    console.log("hello2")
  }

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    navigate(`/${storevalue}`)
    if (isChecked) {
      console.log('Checkbox is checked!');
    } else {
      console.log('Checkbox is unchecked!');
    }
  };


  return (
    <>
      <div className="ads">
        <div className="form-check textad ">
          <input className="form-check-input" type="checkbox" onClick={textmediachk} value={true} id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <img width={300} src="Screenshot 2023-10-16 155117.png" alt="" />
          </label>
          <h4>Create</h4>
          <h3 className='ad'>Text Ad</h3>
        </div>

        <div className="mediad form-check">
          <input className="form-check-input" type="checkbox" onClick={mediachk} value={true} id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">

            <div className="col-lg-8">
              <img width={300} src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/12/17154057/pexels-alesia-kozik-7797735-1600x900.jpg?tr=w-1366" alt="" />
              <img width={150} src="https://cdn-fkjpi.nitrocdn.com/qKtlwNUbDjQPrDGWMrIZSastNGiWbquv/assets/images/optimized/rev-127440f/www.fhpkg.com/wp-content/uploads/2022/03/5-things-to-consider-when-choosing-essential-oil-bottles.jpeg" alt="" />
              <img width={150} src="https://images.pexels.com/photos/7797006/pexels-photo-7797006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </label>
          <h4>Create</h4>
          <h3 className='ad'>Media Ad</h3>

        </div>
      </div>
      <button type="button" onClick={handleCheckboxClick} className="btn btn-primary btnext">Next</button>
    </>
  )
}

export default Createads