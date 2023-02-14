import React,{useEffect, useState} from 'react'

import Skeleton from 'react-loading-skeleton';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {  useParams } from 'react-router-dom'

const Cat = () => {

    const {cid} = useParams();

const [Product, setproduct] = useState([])
const [loading, setloading] = useState(true)

    // const getProduct = async ()=>{
    //     const res = await fetch(`https://fakestoreapi.com/products/category/${cid}`)
    //     setproduct(await res.json())
    //     console.log(setproduct)
    //     setloading(false)
    // }



    useEffect(() => {
      // getProduct();
      // getCat();

 

      axios.get(`https://dummyjson.com/products/category/${cid}?limit=0`)
      .then((resp)=>{
              console.log(resp.data)
              setproduct(resp.data.products)
              setloading(false)

      })

}, [2])



const Loading =()=>{
    return(
      <>
   
   <div className='col-md-3'>
    <Skeleton height={150} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
 
  </div>

  <div className='col-md-3'>
    <Skeleton height={150} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
 
  </div>

  <div className='col-md-3'>
    <Skeleton height={150} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
 
  </div>

  <div className='col-md-3'>
    <Skeleton height={150} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
 
  </div>
  <div className='col-md-3'>
    <Skeleton height={150} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"100%"}/>
    <Skeleton height={20} width={"50%"}/>
 
  </div>

  
 
  
      </>
    )
  }
  
  const Show =()=>{
    return(
        
            Product.map((data)=>{
                return(
                    <>
                     <div className='col-md-3' key={data.id}>
                            <div className='productbox'>
                               <div className='thum'>
                               <img src={data.thumbnail} alt='product'/>
                               </div>
                                <h5>{data.title} </h5>
                                <p> $ {data.price}</p>
                                <Link to={`../product/${data.id}` }>Buy Now</Link>
                            </div>
                        </div>
                    </>
                )
            })
        
    )
  }

  

  return (
    <>
   

 
 
         <div className='container homemaindisplay'>
             <div className='row'>
           
                 <div className='col-md-12 productcol'>
                     <div className='row'>
 
                        {loading ? <Loading/> : <Show/>}
 
 
                        
                     </div>
                 </div>
             </div>
         </div>
 
    </>
   )
                }

export default Cat