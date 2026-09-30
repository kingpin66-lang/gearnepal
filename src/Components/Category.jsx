import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

function Category() {
    let { cid } = useParams()
    let [dataDog, setDataDog] = useState([])
    useEffect(() => { fetch(`https://dummyjson.com/products/category/${cid}`).then(res => res.json()).then(b => setDataDog(b.products)) }, [cid])
    return (
        <>
            <section className='py-4'>
                <div className="container text-center">
                    <div className='type'>
                        <h2>{cid}</h2>
                    </div>
                    <div className="row gap-5 justify-content-center">
                        {dataDog.map(a => (
                           
                            <div className="col-lg-3 main" key={a.id}>
                                 <Link to={`/details/${a.id}`}>
                                <img src={a.thumbnail} alt="" /> </Link>
                                <h4 className='mt-3 fw-bold'>{a.title}</h4>
                                <p className='fw-medium'>{a.description}</p>
                             
                    
                            </div>
                             
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
