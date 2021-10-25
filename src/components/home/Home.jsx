import React,{useEffect ,useState} from 'react';
import {fetchApi} from '../../api/';
import {Link } from 'react-router-dom';
import {Error} from '../index'
import {FaGithub} from 'react-icons/fa';
import {FiGitCommit} from 'react-icons/fi';

import './home.css';


export const Home =  () => {
    const [state, setState] = useState({
        name: null,
        loading: false,
        error: false
    });

    const [user,setUser] =  useState({})


    
    // const inputVal = useRef()
    const handleSubmit = (e)=>{
       let name = document.getElementById('octoname').value
        e.preventDefault();
        setState({
            name,
            loading: true,
            error: false
        });
    }


    const {name,loading,error} = state;
    useEffect(()=>{
        const fetchUser = async ()=>{
            try{
                if(name !== null){
               
                    const data = await fetchApi.fetch(name);
                    if(data.message === 'Not Found' ){
                       return setState({name, loading: false,error: data.message})
                    }
                    setState({name, loading: false,error: false})
                    setUser(data);

                    
                   
                }
            }
            catch(err){
                setState({name, loading: false, error: 'Failed to fetch'})
            }

    
        }
        fetchUser()
    },[name])
   console.log(user)
    return (
        <div className='home'>
           
           <div className="home-container">
               {loading ? <h2>Loading...</h2>: null}
               {error ? <h2><Error data={error}/></h2>: null}
               <form action=""  method="get" onSubmit={handleSubmit}>
                   <div className="home-text">
                       <FaGithub className='home-icon'/>
                       <h2>View Your OctoProfile </h2>
                   </div>
                   <input type="text" name="user" id="octoname"  />
               </form>
                {name !== null && !loading && !error? <Link to={`/details/${user.login}`}>
                    <div className="home-user">
                    <img src={user.avatar_url} alt="" />
                    <div className="home-user-details">
                        <p className ="user-name">
                            {user.name}
                        </p>
                        <div>
                            <p><FiGitCommit/>  {user.public_repos}</p>
                        </div>
                    </div>
                </div>
                </Link>: null}
            </div> 
        </div>
    )
}
