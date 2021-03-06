import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = ({ setAlert }) => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const { searchUser, clearUsers, users } = githubContext
    const [text, setText] = useState('')


    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Please enter a text!', 'light')
        }else{
            searchUser(text)
            setText('')
        }
    }
        return (
            <div>
               <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search User..." value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>   
                </form> 

                { users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
}

export default Search
