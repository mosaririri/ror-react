import React, { useState } from 'react'
import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import axios from 'axios'

type CreateUserAttribute = {
  name: string
  email: string
  password: string
}

const styles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
}))

const handleSubmit = (event: any) => {
  console.log('start')

  console.log(event)
  alert(document.getElementsByClassName('form'))
}

const CreateUserPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange_name = (event: any) => {
    setName(event.target.value)
  }

  const handleChange_email = (event: any) => {
    setEmail(event.target.value)
  }

  const handleChange_password = (event: any) => {
    setPassword(event.target.value)
  }

  const handleClick = () => {
    console.log(name)
    console.log(email)
    console.log(password)

    const registData: CreateUserAttribute = {
        name: name,
        email: email,
        password: password,
    }

    axios
      .post('http://localhost:3000/users', registData)
      .then(success => {
        console.log(success)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        console.log('finally')
      })
  }
  const classes = styles()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create user
        </Typography>
        <form
          id="createUserForm"
          className={classes.form}
          onClick={handleClick}
        >
          <TextField
            id="name"
            name="name"
            variant="outlined"
            fullWidth
            label="name"
            value={name}
            onChange={handleChange_name}
          />
          <TextField
            id="email"
            name="email"
            variant="outlined"
            fullWidth
            label="email address"
            value={email}
            onChange={handleChange_email}
          />
          <TextField
            id="password"
            name="password"
            variant="outlined"
            fullWidth
            label="password"
            type="password"
            value={password}
            onChange={handleChange_password}
          />

          <Button color="primary">Create!</Button>
        </form>
      </Grid>
      <Grid item xs={6}>
        test
      </Grid>
    </Grid>
  )
}

export default CreateUserPage
