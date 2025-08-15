import React,{useState,useEffect} from 'react'
import { upcommingMovie } from '../service/service';
import { useNavigate } from 'react-router-dom'; 

let Upcoming=()=>{

    let navigate=useNavigate();
    let [upcoming,setMovie]=useState([]);
    let [page,setpage]=useState(1);

    let upCommingDetail=async()=>{
        let result= await upcommingMovie(page);
        setMovie(result);
    }

    let detailsPage=(data)=>{

           navigate("/movieDetail",{state:{detail:data}})
    }
    useEffect(()=>{
        upCommingDetail();
    },[page]);

    let nextpage=()=>{
        setpage(page+1);
    }

      let prevpage=()=>{
       if(page>1){
         setpage(page-1);
       }
    }
        return<>
                    <div className="container-fluid bg-dark w-100 p-5 allMovie">
                        <h1 className='text-light text-center' style={{marginLeft:"38%"}}>UPCOMING MOVIES</h1>

                        <div className='container-fluid allMovie bg-dark'>
                            {
                                upcoming.map((up)=>(
                                    <div className=' shadow mx-0 bg-dark showBlock mb-5 p-0'  onClick={(e)=>{detailsPage(up)}}>
                                        <div className='container-fluid w-100 p-0  mt-2 blockHeight'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${up.backdrop_path}`} alt=""/>
                                       <center> <h6 className='mt-3 text-light'>{up.title}</h6></center>
                                        <span className='text-light ' style={{marginLeft:"25%"}}>Release Date : {up.release_date}</span>
                                    </div>
                                    </div>
                                ))
                            }
                        </div>
                                    <div className='m-auto' ><button className='btn btn-primary mx-2' onClick={prevpage}>Prev</button>
                                          <span className='mx-3 text-light'>Page : {page}</span>
                                          <button className='btn btn-primary' onClick={nextpage}>Next </button>
                                </div>

                    </div>
        </>
}

export default Upcoming;
