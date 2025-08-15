import React,{useState,useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import {castDetail} from '../service/service.js'
let MovieDetail=()=>{
let location =useLocation();
let {detail}=location.state||{};


let [cast,setDetail]=useState([]);

let  getDetail=async()=>{
    
    let result=await castDetail(detail.genre_ids);

        setDetail(result);
}

useEffect(()=>{
    getDetail();
},[]);


        return<>
                    <div className='container-fluid bg-light pt-5 p-5 '>
                        <div className='container-fluid shadow w-100 bg-dark text-light rounded p-0 movieContainer mt-5'>
                              <div className=' movieImg rounded'>
                                <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="" style={{width:"100%",height:"100%"}} />
                            </div>
                            <div className=' movieDetail p-4 rounded'    >
                                   
                                                
                                                    <h3>{detail.title}</h3>
                                                    <p className="text-warning fw-bold fs-1"> ★ {detail.vote_average}</p>                                                     
                                                    <p>Release Date : {detail.release_date}</p>
                                                  <h4 className="text-success">Overview</h4>
                                           <p className="text-justify"> {
                                                detail.overview
                                            }</p>
                                    

                            </div>
                          
                        </div>

                        <h1 className='mt-5 mx-1 text-dark'>CAST</h1>
                        <div className='container-fluid w-100 castDetail p-0'>
                        
                        {

                            cast.map((cdetail)=>(
                                <div className='cast text-dark shadow-lg'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${cdetail.profile_path}`} alt=""  />
                                        {cdetail.name}<br/>
                                        Character : {cdetail.character}
                                </div>
                            ))
                        }
                        </div>
                    </div>
        </>
}
export default MovieDetail;