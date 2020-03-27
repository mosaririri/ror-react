import React from 'react'
import { CssBaseline, Grid, makeStyles, Typography, TextField, Button } from '@material-ui/core'
import axios from 'axios'

const styles = makeStyles(theme => ({
    root: {
        height: '100vh'
        
    },
    paper: {
        textAlign: 'center'
    },
    form: {
        width: '100%'
    },
}))

const handleSubmit = (event: any) => {
    console.log('start');
    
  console.log(event)
alert(document.getElementsByClassName('form'))
    
}

const handleClick = () => {
   axios.post('http://localhost:3000/users', {
       name: 'test',
       email: 'test@test.com',
       password: 'test'
   })
   .then(success => {
       console.log(success)
   }
   ).catch(err => {
       console.log(err);
       
   }).finally(() => {
       console.log('finally');
       
   })

}

const Example = () => {
    const classes = styles()

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={6} className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    Log in
                </Typography>
                <form className={classes.form} onClick={handleClick} >
                   <TextField 
                    id="email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    label='email address'/>
                   <TextField 
                    id='password'
                    name="password"
                    variant="outlined"
                    fullWidth
                    label='password'/>
                   <Button color='primary'>submit</Button>
                </form>
            </Grid>
            <Grid item xs={6}>
                test
            </Grid>
        </Grid>
       
    )
}

export default Example
