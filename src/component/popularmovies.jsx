import React,{useState,useEffect} from 'react';
import{getAllMovies} from '../service/service.js'
import { useNavigate } from 'react-router-dom';
let Popular=()=>{

        let navigate=useNavigate();

    let [allMovie,setMovie]=useState([]);
    let [page,setpage]=useState(1);
    let getMovies=async()=>{
       try{
         let result= await getAllMovies(page);
        setMovie(result);
       }
       catch(err){
        console.log(err);
       }
    }
    useEffect(()=>{
            getMovies();
    },[page]);

    let detailsPage=(data)=>{
           navigate("/movieDetail",{state:{detail:data}})
    }
 let nextpage=()=>{
  setpage(page+1)
 }

 let prevpage=()=>{
  if(page>1){
    setpage(page-1)
  }
 }

        return<>
        <div className='container-fluid w-100 p-5 allMovie bg-dark'>
            
              <div className="container-fluid allMovie bg-dark ">
                {
                  allMovie.map((item)=>(
                    <div className=' shadow mx-0 bg-dark showBlock mb-5 p-0' onClick={(e)=>{detailsPage(item)}}>
                        <div className='container-fluid w-100 p-0  mt-2 blockHeight'>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
                        </div>
                      <center ><h5 className='mt-3 mx-3 text-light'> {item.title}</h5></center> 
                      <p className='text-light mx-3'><span className='text-warning text-light 'style={{marginLeft:"35%"}}> Rating: </span> {item.vote_average}</p>
                    </div>
                ))
            }
              </div>
            <div className='m-auto'><button className='btn btn-primary mx-2' onClick={prevpage}>Prev</button>
                  <span className='mx-3 text-light'>Page : {page}</span>
                  <button className='btn btn-primary' onClick={nextpage}>Next </button>
            </div>
        </div>
        
        </>
}

export default Popular;