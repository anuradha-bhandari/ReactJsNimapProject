import React,{useState,useEffect}from "react";

import { useLocation,useNavigate } from "react-router-dom";
import { searchResult } from "../service/service";
let SearchMovie=()=>{

    let [show,setsearch]=useState([]);

    let location=useLocation();
    let navigate=useNavigate();

    let search = location.state?.searchVal || "";

let AllSearchResult=async()=>{
    let result=await searchResult(search);
    setsearch(result);
}
let detailsPage=(data)=>{

           navigate("/movieDetail",{state:{detail:data}})
    }

useEffect(()=>{
        AllSearchResult();
},[search]);


        return<>
                <div className='container-fluid w-100 p-5 allMovie bg-dark'>
                          <div className="container-fluid allMovie bg-dark ">
                {show.length==0?(
                    <h1 className="text-light  mt-5" style={{marginLeft:"480px"}}>Search Data Not Found</h1>
                ):(
                  show.map((item)=>(
                    <div className=' shadow mx-0 bg-dark showBlock mb-5 p-0' onClick={(e)=>{detailsPage(item)}}>
                        <div className='container-fluid w-100 p-0  mt-2 blockHeight'>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
                        </div>
                      <center ><h5 className='mt-3 mx-3 text-light'> {item.title}</h5></center> 
                      <p className='text-light mx-3'><span className='text-warning text-light' style={{marginLeft:"35%"}}>Rating: </span> {item.vote_average}</p>
                    </div>
                ))
            )
            }
              </div>
                </div>
        </>
}
export default SearchMovie;