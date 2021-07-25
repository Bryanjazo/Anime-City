import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUserDetails} from '../Redux/reducerRedux.js'

function Profile(){
  const {userDetails} = useSelector((state) => state.anime)
  const dispatch = useDispatch()
  const currentUser = localStorage.user

  useEffect(() =>{
    dispatch(getUserDetails(currentUser))
  },[currentUser, dispatch])

    return (
      <div><h1>Welcome {userDetails.user_name}</h1></div>
    )
}


export default Profile
