import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import humanize from 'humanize';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {fetchApi} from '../../api';
import {FiGitBranch,FiGitMerge} from 'react-icons/fi';
import {FaCircle,FaStar} from 'react-icons/fa';
import {Chart} from '../index'
import './details.css';

export const Details = ({Loader}) => {
    
    const [state, setState] = useState({
        loading:false,
        error: false
    })
    const [repo , setRepo] =  useState([])
    const [user,setUser] = useState({});
    const {name} = useParams();
   
    

    useEffect(()=>{
        AOS.init();
        const fetchClient = async ()=>{
            try {
                setState({loading: true,error:false})
                const client  = await fetchApi.fetch(name);
                setUser(client)
                setState({loading: false,error:false})
            } catch (error) {
                setState({loading: false,error:true})
            }
        }
       

        const fetchRepo = async ()=>{
            try {
                const repo = await fetchApi.fetchRepo(name);
                setRepo(repo);
                setState({loading: false,error:false})
            } catch (error) {
                setState({loading: false,error:true})
            }
        }

        fetchClient();
        fetchRepo()
    },[name])

    const handleFilter = (e)=>{
       switch (e.target.value) {
           case 'stars' :
                const sortArr = repo.sort((a,b)=> a.stargazers_count > b.stargazers_count ? 1 : -1)
                setRepo(sortArr)
                break;
            case 'language':
                const sortLang = repo.sort((a,b)=> a.language > b.language ? 1 : -1)
                setRepo(sortLang)
                break;
           default:
               break;
       }
    }

    return (

        <div className='details'>
            {state.error? <h2>Error: {state.error}</h2>:null}
            <div className="details-header">
                <div className="details-user-data">
                    <div className="image">
                    <img src={user.avatar_url} alt="" />
                    </div>
                    <h2>{user.name}</h2>
                    <h3 className="tag">{user.login ?'@'+user.login : null}</h3>

                    <div className="user-details-tags">
                        <div>
                            {/* <FaMapMarkerAlt size='2rem' className='user-tag-icon'/> */}
                            <p className="num">{user.public_repos}</p>
                            <p className='desc'>Repositories</p>
                        </div>
                        <div>
                            {/* <FaMapMarkerAlt size='2rem' className='user-tag-icon'/> */}
                            <p className="num">{(user.followers)}</p>
                            <p className='desc'>followers</p>
                        </div>
                        <div>
                            {/* <FaMapMarkerAlt size='2rem' className='user-tag-icon'/> */}
                            <p className="num">{user.following}</p>
                            <p className='desc'>following</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div >
                    <Chart repo={repo}/>
                    
            </div>
            <div className="repos" >
                <div className="title">
                    <h3>Top Repos</h3>
                    <select name="filter" id="filter" defaultValue='Filter By' onChange={handleFilter}>
                        <option value="">Filter By</option>
                        <option value="language">Language</option>
                        <option value="stars">Stars</option>
                    </select>
                </div>
                <div className="repos-output">
                {repo.map(repo => {
                   return <div className="card" key={repo.id} data-aos='fade-up' data-aos-delay="50" data-aos-once="true" >
                    <a href={repo.html_url}>
                        <p className="repo-title">{<FiGitBranch/>} {humanize.truncatechars(repo.name,20)}</p></a>
                     
                        <p className="repos-desc">
                           {(repo.description? humanize.truncatechars(repo.description,60) : null)}
                        </p>
                        <div className="repo-footer">
                            <div className='repo-details-parent'>
                            <div className="repo-details">
                                <p>{<FaCircle color='yellow'/>} {repo.language}</p>
                            </div>
                            <div className="repo-details">
                                
                                <p>{<FaStar/>} {repo.stargazers_count}</p>
                            </div>
                            <div className="repo-details">
                               
                                <p> {<FiGitMerge/>} {repo.forks_count}</p>
                            </div>
                            </div>
                            <div className="repo-details">
                               
                                <p>{(repo.size)/1024 +" kb" }</p>
                            </div>
                            
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>
    )
}
