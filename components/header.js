import {Container,Menu,Button,Image} from 'semantic-ui-react'
  
export default ()=>{
    return (<div>                 
        <Container style={{paddingTop:20}} >
                <Menu>  
        <Container>
          <Menu.Item as="h2" header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.2em' }} />    
          </Menu.Item>
        </Container>
        <Container>
          <Menu.Menu position="right">
            <Menu.Item name="logout">
            <Button  size='tiny' color='blue'>Login</Button>
            <Button  size='tiny' color='blue' >Register</Button>
            </Menu.Item>
          </Menu.Menu>   
    </Container>  
      </Menu>     
      </Container>
    

              </div> )

}