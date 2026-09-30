import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
function Details() {
    let { id } = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then(b=>setData(b))
    }, [id])
        const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    }
    const decrement = () => {
        setCount(count => count - 1);
    };
    
    return (
        <>
            <section>
                <div className="container text-center">
                    <div className="box mt-3 shadow-lg">
                        <img src={data.thumbnail} alt="" />
                        <h4 className='mt-3 fw-bold'>{data.title}</h4>
                        <p>{data.description}</p>
                        <p className='fw-bold'>Price: ${data.price}</p>
                        <button className='btn btn-primary align-items-center'><FaShoppingCart /> Add to Cart</button>
                    <br/>
                         <div class="btn-group mb-3 mt-1" role="group" aria-label="Basic mixed styles example">
                                <button type="button" onClick={decrement} class="btn btn-danger">-</button>
                                <button type="button" class="btn btn-warning">{count} </button>
                                <button type="button" onClick={increment}  class="btn btn-success">+</button>
                            </div>
                            </div>
                </div>
            </section >
        </>
    )
}

export default Details
