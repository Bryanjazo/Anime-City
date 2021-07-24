import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function MiniSignUp(){
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const history = useHistory();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user:{
        user_name: username,
        email: email,
        password: password
      }
       })
    })
    .then(resp => resp.json())
    .then(function(data){
      console.log(data)
      debugger
      if(data.id !== ''){
        // console.log(data.jwt, "tokennnn")
         localStorage.setItem("user", data.user.id)
         // localStorage.setItem("token", data.jwt)
         // userDetailsDataSignUp(data.user)
         // settingUserSignUp()
         history.push('/Profile')
      }
    })
  }
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={username}
          id="username"
          label="User Name"
          name="username"
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          value={email}
          label="Email Address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          value={password}
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
      </form>
      </div>
    )

}

export default MiniSignUp
