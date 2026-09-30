import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { GiSchoolBag } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import Details from './Components/Details';

function Header() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json().then(b => setData(b)))
  }
    , [])
     window.addEventListener('scroll',()=>{
            if(scrollY>200)
        {
            document.querySelector('nav').classList.add('s')
        }
        else{
            document.querySelector('nav').classList.remove('s')
        }
        })
  return (
    <>
      <header className='bg1 py-4'>
        <div className="container">
          <div className="row  align-items-center justify-content-between">
            <div className="col-lg-7 d-flex gap-5 align-items-center">
              <h2 className='text-white fw-bold '>GEAR <br />NEPAL</h2>
              <form className='d-flex flex-wrap gap-0 position-relative'>
                <input type="text" className='search px-5 relative' placeholder='Search for products' />
                <button type="button" className="btn btn-dark align-items-center text-center position-absolute end-0"><IoIosSearch /></button>
              </form>
            </div>
            <div className="col-lg-5 d-flex flex-wrap align-items-center gap-5 justify-content-center lh">
              <div className='border-end border-secondary px-3 '>
                <h6 className='text-secondary fw-bold'>Currency</h6>
                <p className='fw-bold text-white'>USD <RiArrowDropDownLine /></p>
              </div>
              <div className='border-end border-secondary px-4'>
                <h6 className='text-secondary fw-bold'>Sign-up</h6>
                <p className='fw-bold text-white'>MY ACCOUNT <RiArrowDropDownLine /></p>
              </div>
              <div className='d-flex align-items-center gap-1 text-center'>
                <GiSchoolBag />
                <h6 className='fw-bold text-white'>YOUR PACK</h6>
              </div>
            </div>
          </div>
        </div>
      </header>


      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container justify-content-between">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0 gap-2 fw-bold">
              <li className="nav-item">
                <Link className="nav-link active px-3" aria-current="page" to="/">Home</Link>
              </li>
              {data.slice(0, 10).map(a => (
                <li className="nav-item" >
                  <Link className="nav-link" to={`/category/${a.slug}`}>{a.name}</Link>
                </li>))}
            </ul>

          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:cid' element={<Category />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default Header
