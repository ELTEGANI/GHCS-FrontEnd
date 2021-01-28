
import {Container,Tab} from 'semantic-ui-react';
const panes = [
    { menuItem: 'Create Survey', render: () => <Tab.Pane>Coming Soon</Tab.Pane> },
    { menuItem: 'Survey Statistics', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Create Voting', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Voting Statistics', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Create Posts', render: () => <Tab.Pane></Tab.Pane> },

  ]
export default ()=>{
    return (<div>
          <Container style={{paddingTop:0.8 + 'em'}}>
     <Tab menu={{ fluid: true, vertical: true }} menuPosition='left' panes={panes} />
  </Container>
    </div>);
};