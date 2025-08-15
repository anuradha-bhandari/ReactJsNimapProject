import React ,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
let Navbar=()=>{
  let navigate=useNavigate();

  let [search,setSearch]=useState("");
  let [isOpen,setIsOpen]=useState(false);

  let searchStore=(e)=>{
      setSearch(e.target.value);
  }
  let searchPage=()=>{
      navigate('/search',{state:{searchVal:search}});
      setIsOpen(false);
  }
        return<>
          <div className='container-fluid navbar d-flex bg-secondary '>
                <h3 className=' mt-2 p-0'><Link to="/" className='link text-white'>MovieDb</Link></h3>

                <button className='btn btn-outline-danger  d-md-none' onClick={()=>setIsOpen(!isOpen)}> ☰</button>
               <div className={`${isOpen?'menu-open':'menu-closed'} navbar-menu`}>
                 <ul className='navbar-list d-flex p-1 align-middle'>
                    <li className='mx-2 mt-2 '><Link to="/" className='link'>POPULAR</Link></li>
                    <li className='mx-2 mt-2'><Link to="/toprating" className='link'>TOP RATED</Link></li>
                    <li className='mx-2 mt-2'><Link to="/upcoming" className='link'>UPCOMING</Link></li>
                    <li><div className='d-flex'><input type="text" name="search" id="search" placeholder='MOVIE NAME' onChange={(e)=>{searchStore(e)}} value={search} className='form-control mx-2'/>
                    <button className='btn btn-dark ' style={{fontWeight:"bold"}} onClick={searchPage}>Search</button></div></li>
                </ul>
               </div>
      
          </div>
        
        </>
}
export default Navbar;