import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    let [data, setData] = useState([])
    useEffect(() => { fetch(`https://dummyjson.com/products/`).then(res => res.json()).then(b => setData(b.products)) }, [])
    return (
        <>
            <section className='py-4'>
                <div className="container text-center">
                    <div className='type'>
                        <h2>ALLPRODUCTS</h2>
                    </div>
                    <div className="row gap-5 justify-content-center">
                        {data.map(a => (
                            <div className="col-lg-3 main" key={a.id}>
                             <Link to={`/details/${a.id}`}><img src={a.thumbnail} alt="" /></Link>
                                <h4 className='mt-3 fw-bold py-2 shadow-sm'>{a.title}</h4> 
                            </div>
                        ))}                    
                    </div>
                    <div className="row mt-5 justify-content-center p-3 border-bottom">
                        <div className="col-lg-3 relative">
                            <h6 className='fw-bold'>Knock Your Socks Off Service.</h6>
                            <p>Check out our Testimonials to see more..</p>
                        </div>
                          <div className="col-lg-3">
                            <h6 className='fw-bold'>FREE Shipping over $5</h6>
                            <p>All $5+ orders go free.</p>
                        </div>
                          <div className="col-lg-3">
                            <h6 className='fw-bold'>Delivery all over NEPAL.</h6>
                            <p>Sorry, we're currently unable to ship off Nation.</p>
                        </div>
                          <div className="col-lg-3">
                            <h6 className='fw-bold'>200+ Ultralight Brands!</h6>
                            <p>Huge selection of ultralight gear!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
