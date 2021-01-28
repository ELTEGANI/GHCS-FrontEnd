import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import {useState} from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

export default () => {
  
  const [email,setEmail]       = useState('');
  const [password,setPassword] = useState('');
   const {doRequest,errors}    = useRequest({
     url:'http://149.248.39.4/api/admin/loginadmin',
     method:'post',
     body:{
       email,password
     },
     onSuccess:() => Router.push('/admin/dashboard')
   })

   
    const onSubmit = async(event) =>{
      event.preventDefault();
      await doRequest();
    }

    return  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as='h2' color='blue' textAlign='center'>
         Sign in
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input 
          value={email} 
          onChange={e=>setEmail(e.target.value)} 
          fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            placeholder='Password'
            type='password'
          />
          <Button color='blue' fluid size='large'>
            Sign in
          </Button>
          {errors}
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>;
};