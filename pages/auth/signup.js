import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


export default ()=>{
    return  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
         Sign in
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            Sign in
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>;
};