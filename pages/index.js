import {Container,Tab,Menu,Button} from 'semantic-ui-react';
const panes = [
    { menuItem: 'Human Resources', render: () => <Tab.Pane>Coming Soon</Tab.Pane> },
    { menuItem: 'Human Resources', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Human Resources', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Human Resources', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Human Resources', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Human Resources', render: () => <Tab.Pane></Tab.Pane> },

  ]
export default ()=>{
    return (<div>
          <Container style={{paddingTop:0.8 + 'em'}}>
     <Tab menu={{ fluid: true, vertical: true }} menuPosition='left' panes={panes} />
  </Container>
    </div>);
};