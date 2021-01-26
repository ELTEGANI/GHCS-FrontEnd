import {Container,Menu,Button,Dropdown} from 'semantic-ui-react'
import Logo from '../images/logo.svg';

const options = [
  { key: 1, text: 'العربية', value: 1 },
  { key: 2, text: 'English', value: 2 },
]
export default ()=>{
    return (<div>        
 <div style={{marginLeft: '7.0em',marginTop:'-50.0px'}}>
    <Logo />
  </div>                   
        <Container style={{paddingTop:20}} >
                <Menu>  
        <Container>
          <Menu.Item as="h3" header>
            Home
          </Menu.Item>
        </Container>
        <Container>
          <Menu.Menu position="right">
            <Menu.Item name="logout">
            <Button  size='small' color='blue'>Signin</Button>
            <Button  size='small' color='red'>Admin Portal</Button>
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