import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUserDetails, setUserDetails} from '../Redux/reducerRedux.js'
import './Profile.css'

function Profile(){
  const {userDetails} = useSelector((state) => state.anime)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [formSwitch, setFormSwitch] = useState(false)
  const dispatch = useDispatch()
  const currentUser = localStorage.user

  useEffect(() =>{
    if(localStorage.user !== ''){
     dispatch(getUserDetails(localStorage.user))
   }
 },[currentUser,dispatch])
console.log(userDetails)


  const handleUpdate = (e) =>{
    e.preventDefault()
    fetch(`http://localhost:3000/users/${currentUser}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_name: username,
        email: email,
       })
    })
    .then(resp => resp.json())
      .then(function(data){
        // window.location.reload()
        console.log(data)
        dispatch(setUserDetails(data))
        setFormSwitch(!formSwitch)
      })
  }
    if(formSwitch === false){
      return(
        <div className="prime">
          <div className="WelcomeHeader">
            <h1>Welcome {userDetails.user_name}</h1><br></br>
          </div>
          <div className="UpdateForm">
          <div className='prime__container'>
              <h4 className="profileDetails">Profile Details</h4>
              <div className="ProfileText">
              <h4>UserName: {userDetails.user_name}</h4>
              <h4>Email: {userDetails.email}</h4>
              </div>
              <button onClick={() => setFormSwitch(!formSwitch)}>Update Profile</button>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="prime">
          <div className="WelcomeHeader">
            <h1>Welcome {userDetails.user_name}</h1><br></br>
          </div>
          <div className="UpdateForm">
          <div className='prime__container'>
              <h4 className="profileDetails">Profile Details</h4>
              <div className="ProfileText">
              <h4>UserName:</h4>
              <input text="username" name='username' placeholder={userDetails.user_name} value={username} onChange={e => setUsername(e.target.value)}/>
              <h4>Email:</h4>
              <input text="email" name='email' placeholder={userDetails.email} value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <button onClick={handleUpdate}>Update Profile</button>
            </div>
          </div>
        </div>
      )
    }
}


export default Profile
