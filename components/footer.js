import {
    Divider,
    Grid,
    Button
  } from 'semantic-ui-react'

export default ()=>{
    return ( 
    <div>
        <Grid stackable container>
        <Divider hidden section />
          <Grid.Row>
            <Grid.Column>
              <Divider />
              <footer style={{color:'blue',textAlign:'center',fontSize: '1.1em'}}>
                Gulf Human Capital Society
              </footer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
           <Grid.Column >
           <Button circular color='facebook' icon='facebook' />
           <Button circular color='twitter' icon='twitter' />
           <Button circular color='linkedin' icon='linkedin' />
           <Button circular color='google plus' icon='google plus' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div> 
    )
} 