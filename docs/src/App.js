import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Toolbar,
  ToolbarRow,
  Section,
  Title,
  FixedToolbarAdjustor,
} from '@mdc-react/toolbar';

import HomePage from './pages/Home';
import RipplePage from './pages/Ripple';
import ButtonPage from './pages/Button';
import CheckboxPage from './pages/Checkbox';
import DrawerPage from './pages/Drawer';
import ToolbarPage from './pages/Toolbar';

const Application = () => (
  <Router>
    <div>
      <Toolbar fixed={true} >
        <Section align="start">
          <ToolbarRow>
            <div className="menu-icon-container" />
            <Title>MDC React</Title>
          </ToolbarRow>
        </Section>
      </Toolbar>
      <FixedToolbarAdjustor>
        <Route exact path="/" component={HomePage} />
        <Route path="/ripple" component={RipplePage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/checkbox" component={CheckboxPage} />
        <Route path="/drawer" component={DrawerPage} />
        <Route path="/toolbar" component={ToolbarPage} />
      </FixedToolbarAdjustor>
    </div>
  </Router>
)
export default Application
