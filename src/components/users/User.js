import React, { Fragment, useEffect, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext)

    const { user, loading, getUser, repos, getUserRepos } = githubContext
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

        const {
            name,
            avatar_url,
            location,
            login,
            company,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user 
                                    
        if (loading) return <Spinner />
        return (
            <Fragment >
                <Link to={`/`} className="btn btn-light">Back To Search</Link>
                Hireable:{' '}
                {hireable? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/> }
                <div className="card grid-2">
                    <div className="text-center">
                        <img src={avatar_url} alt="" className="round-img" style={{width:'150px'}}/>
                        <h1>{name}</h1>
                        <p>location: {location}</p>
                    </div>
                    <div>
                        {bio && <div>
                            <h4>Bio</h4>
                            <p>{bio}</p>
                            </div>}
                        <a href={html_url} className=" my-1 btn btn-dark">Visit Github Profile</a>

                        <ul>
                          <li>
                                {login && <Fragment>
                                    <strong>Username: </strong>{login}
                                </Fragment>} 
                          </li> 
                          <li>
                                {company && <Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment>} 
                          </li> 
                          <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong>{blog}
                                </Fragment>}
                          </li>
                        </ul>

                    </div>
                </div>
                <div className="card text-center">
                   <div className="badge badge-primary">Followers: {followers}</div>
                   <div className="badge badge-success">Following: {following}</div> 
                   <div className="badge badge-light">Public Repos: {public_repos}</div>
                   <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
}

export default User
