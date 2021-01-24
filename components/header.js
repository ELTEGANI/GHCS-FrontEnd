import {Container,Menu,Button,Dropdown } from 'semantic-ui-react'
const options = [
  { key: 1, text: 'العربية', value: 1 },
  { key: 2, text: 'English', value: 2 },
]
export default ()=>{
    return (<div>        
        {/* <Image size='mini' src='/images/logo.svg' style={{ marginLeft: '12.0em',paddingTop:'2.0em' }} />              */}
        <Container style={{paddingTop:20}} >
                <Menu>  
        <Container>
          <Menu.Item as="h2" header>
            Home
          </Menu.Item>
        </Container>
        <Container>
          <Menu.Menu position="right">
            <Menu.Item name="logout">
            <Button  size='tiny' color='blue'>Login</Button>
            <Menu compact>
               <Dropdown text='Language' options={options} simple item />
            </Menu>
            </Menu.Item>
          </Menu.Menu>   
    </Container>  
      </Menu>     
      </Container>
    

              </div> )

}