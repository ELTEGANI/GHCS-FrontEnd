import {
    Divider,
    Grid
  } from 'semantic-ui-react'

export default ()=>{
    return ( 
    <div>
        <Grid stackable container>
        <Divider hidden section />
          <Grid.Row>
            <Grid.Column>
              <Divider />
              <footer style={{color:'blue'}}> About Gulf Human Capital Society</footer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div> 
    )
}