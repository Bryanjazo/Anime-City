import React from 'react'
import TextField from '@material-ui/core/TextField';

function MiniSignUp(){

    return (
      <div>
      <form>
        <h1>Sign Up</h1>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"

          label="User Name"
          name="username"

          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"

          label="Email Address"
          name="email"

          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"

          label="Password"
          name="password"

          autoComplete="password"
          autoFocus
        />
      </form>
      </div>
    )

}

export default MiniSignUp
