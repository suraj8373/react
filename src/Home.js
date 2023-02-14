import React,{useEffect, useState} from 'react'
import Banner from './Banner'
import Skeleton from 'react-loading-skeleton';

import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

const [Product, setproduct] = useState([])
const [Category, setCategory] = useState([])
const [loading, setloading] = useState(true)





     


    const Loading =()=>{
        return (
            <>
                  <div className='col-md-2 productbox'>
    <Skeleton height={250} width={"100%"}/>
 
  </div>
  <div className='col-md-2 productbox'>
    <Skeleton height={250} width={"100%"}/>
 
  </div>
  <div className='col-md-2 productbox'>
    <Skeleton height={250} width={"100%"}/>
 
  </div>
  <div className='col-md-2 productbox'>
    <Skeleton height={250} width={"100%"}/>
 
  </div>

            </>
        )
      }

      const Phones =()=>{


        const featurData = Product.filter((curElem)=>{
          return curElem.category === "smartphones";
      })

        return(

          featurData.slice(0,6).map((data )=>{
                    return(
                        <>
                        <div className='col-md-2' key={data.id}>
                            <div className='productbox'>
                               <div className='thum'>
                               <img src={data.thumbnail} alt='product'/>
                               </div>
                                <h5>{data.title} </h5>
                                <p> $ {data.price}</p>
                                <Link to={`product/${data.id}` }>Buy Now</Link>
                            </div>
                        </div>
                        </>
                    )
                })
            
        )
      }



      const Furniture =()=>{


        const featurData = Product.filter((curElem)=>{
          return curElem.category === "furniture";
      })

        return(

          featurData.slice(0,6).map((data )=>{
                    return(
                        <>
                        <div className='col-md-2' key={data.id}>
                            <div className='productbox'>
                               <div className='thum'>
                               <img src={data.thumbnail} alt='product'/>
                               </div>
                                <h5>{data.title} </h5>
                                <p> $ {data.price}</p>
                                <Link to={`product/${data.id}` }>Buy Now</Link>
                            </div>
                        </div>
                        </>
                    )
                })
            
        )
      }



      const WBegs =()=>{


        const featurData = Product.filter((curElem)=>{
          return curElem.category === "womens-bags";
      })

        return(

          featurData.slice(0,6).map((data )=>{
                    return(
                        <>
                        <div className='col-md-2' key={data.id}>
                            <div className='productbox'>
                               <div className='thum'>
                               <img src={data.thumbnail} alt='product'/>
                               </div>
                                <h5>{data.title} </h5>
                                <p> $ {data.price}</p>
                                <Link to={`product/${data.id}` }>Buy Now</Link>
                            </div>
                        </div>
                        </>
                    )
                })
            
        )
      }



      const Wcloths =()=>{


        const featurData = Product.filter((curElem)=>{
          return curElem.category === "womens-dresses";
      })

        return(

          featurData.slice(0,6).map((data )=>{
                    return(
                        <>
                        <div className='col-md-2' key={data.id}>
                            <div className='productbox'>
                               <div className='thum'>
                               <img src={data.thumbnail} alt='product'/>
                               </div>
                                <h5>{data.title} </h5>
                                <p> $ {data.price}</p>
                                <Link to={`product/${data.id}` }>Buy Now</Link>
                            </div>
                        </div>
                        </>
                    )
                })
            
        )
      }




useEffect(() => {

        axios.get('https://dummyjson.com/products?limit=0')
        .then((resp)=>{
                console.log(resp.data.products)
                setproduct(resp.data.products)
                setloading(false)

        })

        axios.get('https://dummyjson.com/products/categories')
        .then((resp)=>{
                console.log(resp.data)
                setCategory(resp.data)
               

        })

}, [])

  return (
   <>
  
    <Banner/>


        <div className='container homemaindisplay'>
            <div className='row'>


          



                <div className='col-md-12 productcol'>
                <h3>Top SmartPhones </h3>
                    <div className='row'>
                       {loading ? <Loading/> : <Phones/>}
                    </div>

                    <h3>Top 
                    Furniture </h3>
                    <div className='row'>
                       {loading ? <Loading/> : <Furniture/>}
                    </div>


                    <h3>Women Begs </h3> 
                    <div className='row'>
                       {loading ? <Loading/> : <WBegs/>}
                    </div>


                    <h3>Women Cloths </h3> 
                    <div className='row'>
                       {loading ? <Loading/> : <Wcloths/>}
                    </div>


                </div>


                <div className='col-md-12 categorycol'>
                <h2>Category</h2>
               
                <ul>

                {
                    Category.map((cat) =>{
                       return    <li><NavLink to={`cat/${cat}`}>{cat}</NavLink></li>
                    })
                }

                </ul>

                </div>





            </div>
        </div>

   </>
  )
}

export default Home