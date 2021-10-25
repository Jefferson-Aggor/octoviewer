// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
// eslint-disable-next-line
import {useParams} from 'react-router-dom';
// eslint-disable-next-line
import {fetchApi} from '../../api'

import {FiGitBranch,FiGitMerge} from 'react-icons/fi'
import {FaCircle,FaStar} from 'react-icons/fa'
import './details.css';

export const Details = () => {
    
    const [state, setState] = useState({
        loading:false,
        error: false
    })
    const [user,setUser] = useState({});
    const {name} = useParams();
   
    

    useEffect(()=>{
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
        fetchClient()
    },[name])

    return (

        <div className='details'>
            {/* {state.error? <h2>Error: {state.error}</h2>:null} */}
            <div className="details-header">
                <div className="details-user-data">
                    <div className="image">
                    <img src={user.avatar_url} alt="" />
                    </div>
                    <h2>{user.name}</h2>
                    <h3 className="tag">{'@'+user.login}</h3>


                  




                    <div className="user-details-tags">
                        <div>
                            {/* <FaMapMarkerAlt size='2rem' className='user-tag-icon'/> */}
                            <p className="num">{user.public_repos}</p>
                            <p className='desc'>Repositories</p>
                        </div>
                        <div>
                            {/* <FaMapMarkerAlt size='2rem' className='user-tag-icon'/> */}
                            <p className="num">{user.followers}</p>
                            <p className='desc'>followers</p>
                        </div>
                        <div>
                            {/* <FaMapMarkerAlt size='2rem' className='user-tag-icon'/> */}
                            <p className="num">{user.following}</p>
                            <p className='desc'>following</p>
                        </div>
                    </div>
                </div>
                {/* <div className="details-charts">
                    <div className="chart chart-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore ullam sed quae aliquam fugiat asperiores perspiciatis alias, ea, deleniti eos vitae aliquid suscipit tempora impedit facilis nobis minus laboriosam.</div>
                    <div className="chart chart-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore ullam sed quae aliquam fugiat asperiores perspiciatis alias, ea, deleniti eos vitae aliquid suscipit tempora impedit facilis nobis minus laboriosam.</div>
                    <div className="chart chart-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore ullam sed quae aliquam fugiat asperiores perspiciatis alias, ea, deleniti eos vitae aliquid suscipit tempora impedit facilis nobis minus laboriosam.</div>
                </div> */}
            </div>

            <div className="repos">
                <div className="title">
                    <h3>Top Repos</h3>
                    <select name="filter" id="filter" defaultValue='Filter By'>
                        <option value="">Filter By</option>
                        <option value="stars">Stars</option>
                    </select>
                </div>
                <div className="repos-output">
                    <div className="card">
                    <a href="/"><p className="repo-title"><FiGitBranch/> Campusconnect</p></a>
                        <p className="repos-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eius fugit, deleniti velit nisi modi repellat natus cum exercitationem aliquam!
                        </p>
                        <div className="repo-footer">
                            <div className='repo-details-parent'>
                            <div className="repo-details">
                                <p><FaCircle color='yellow'/> Css</p>
                            </div>
                            <div className="repo-details">
                                
                                <p><FaStar/> 2145</p>
                            </div>
                            <div className="repo-details">
                               
                                <p> <FiGitMerge/> 2145</p>
                            </div>
                            </div>
                            <div className="repo-details">
                               
                                <p>2145 kb</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card">
                        <a href="/"><p className="repo-title"><FiGitBranch/> Campusconnect</p></a>
                        <p className="repos-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eius fugit, deleniti velit nisi modi repellat natus cum exercitationem aliquam!
                        </p>
                        <div className="repo-footer">
                            <div className='repo-details-parent'>
                            <div className="repo-details">
                                <p><FaCircle color='yellow'/> Css</p>
                            </div>
                            <div className="repo-details">
                                
                                <p><FaStar/> 2145</p>
                            </div>
                            <div className="repo-details">
                               
                                <p> <FiGitMerge/> 2145</p>
                            </div>
                            </div>
                            <div className="repo-details">
                               
                                <p>2145 kb</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card">
                    <a href="/"><p className="repo-title"><FiGitBranch/> Campusconnect</p></a>
                        <p className="repos-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eius fugit, deleniti velit nisi modi repellat natus cum exercitationem aliquam!
                        </p>
                        <div className="repo-footer">
                            <div className='repo-details-parent'>
                            <div className="repo-details">
                                <p><FaCircle color='yellow'/> Css</p>
                            </div>
                            <div className="repo-details">
                                
                                <p><FaStar/> 2145</p>
                            </div>
                            <div className="repo-details">
                               
                                <p> <FiGitMerge/> 2145</p>
                            </div>
                            </div>
                            <div className="repo-details">
                               
                                <p>2145 kb</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
