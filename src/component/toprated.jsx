import React ,{useState,useEffect}from "react";
import { topRatingMovie } from "../service/service";
import { useNavigate } from "react-router-dom";

let TopRating=()=>{
    let navigate=useNavigate();
    let [topMovie,setMovie]=useState([]);
    let [page,setpage]=useState(1);
    
    let TopRatingDetail=async()=>{

            let result=await topRatingMovie(page);
            setMovie(result);

            }
            useEffect(()=>{
                TopRatingDetail();
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
           <div className="container-fluid bg-dark w-100 p-5 allMovie">
         <h1 className="text-light " style={{marginLeft:"38%"}} >TOP RATING MOVIES</h1>

         <div className="container-fluid allMovie bg-dark">
            {
                topMovie.map((top)=>(
                    <div className="shadow mx-0 bg-dark showBlock mb-5 p-0" onClick={(e)=>{detailsPage(top)}}>
                        <div className='container-fluid w-100 p-0  mt-2 blockHeight'>
                        <img src={`https://image.tmdb.org/t/p/w500/${top.backdrop_path}`} alt="" />
                          <h6 className="mt-3  text-light" style={{marginLeft:"35%"}}>  {top.title}</h6>
                          <p className="text-light mx-3"><span className="text-warning text-light" style={{marginLeft:"35%"}}>Rating: </span> {top.vote_average}</p>
                    </div>
                    </div>
                ))
            }
         </div>
        <div className="m-auto" ><button className='btn btn-primary mx-2' onClick={prevpage}>Prev</button>
                                 <span className='mx-3 text-light'>Page : {page}</span>
                                 <button className='btn btn-primary' onClick={nextpage}>Next </button>
                </div>

           </div>
        </>
}
export default TopRating;