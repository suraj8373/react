import React,{useEffect, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import axios from 'axios'

const Product = () => {

    const {id} = useParams();

    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(true)

    // const getSingle = async ()=>{
    //     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    //     setproduct(await res.json())
    //     console.log(product);
    //     setloading(false);
    // }



    useEffect(() => {
      // getProduct();
      // getCat();

      axios.get(`https://dummyjson.com/products/${id}`)
      .then((resp)=>{
              console.log(resp.data)
              setproduct(resp.data)
              setloading(false)

      })


}, [3])







const Loading =()=>{
  return(
    <>
       {/* <h5 className='loading'> <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
  <br/>
  <p>Loading....</p>


  </h5> */}
  <div className='col-md-4'>
    <Skeleton height={350} width={"100%"}/>
 
  </div>
  <div className='col-md-8'>
    <Skeleton height={50} width={"100%"}/>
    <Skeleton height={50} width={"20%"}/>
    <br/>
    <Skeleton height={20} width={"80%"}/>
    <Skeleton height={20} width={"80%"}/>
    <Skeleton height={20} width={"80%"}/>
    <Skeleton height={20} width={"80%"}/>
    <Skeleton height={20} width={"80%"}/>
    <Skeleton height={20} width={"80%"}/>
    <Skeleton height={20} width={"30%"}/>
  </div>

    </>
  )
}

var a = product.discountPercentage
var b = product.price

var c = b / 100  * a
var discount = b - c 

const Show =()=>{
  return (
    <>
 
         <div className='col-md-5'>
          <div className='imghouse'>
          <ul>
            {
              product.images.map((imag)=>{
                return(
                  <>
                  <li><img src={imag} alt='fsdfsf'/></li>
                  </>
                )
              })
            }

          </ul>
          <div className='singleimage'>
          <img className='singleimages' src={product.thumbnail} alt="image"/>
          </div>
          
          </div>
         </div>
         <div className='col-md-6 productdiscription'>
         
           <h1>{product.title}</h1>
           <p className='producrating'> Rating {product.rating} </p>
          <span>discount {product.discountPercentage}%</span>
           <p className='Price'><spna className="orignalprice"> $ {product.price} </spna> / {discount}</p>
          
           <p className='discriptionp'> {product.description}</p>
            <p className='mb-0'>Stock :  <b>{product.stock > 0 ? "in stock" : "not available"}</b></p>
            <p className='category mb-0'> Category : <b>{product.category}</b></p>
            <p>Brand : <b>{product.brand}</b></p>
           <button className='btn btn-warning  px-4 py-2 mr-2'>Add to Cart</button>
           <NavLink to="/cart" className='btn ms-2 btn-success ms-2 px-3 py-2'>Go to Cart</NavLink>
         </div>
            
           
    
    </>
   );
}


return(
  <>
      <div className='container singledetails'>
        <div className='row'>
          { loading ? <Loading/> : <Show/>}
        </div>
      </div>
  </>
)



}

export default Product