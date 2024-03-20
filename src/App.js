import './App.css';
import SideNav from './public/navigation/side-nav/SideNav.js';
import Content from './public/navigation/content/Content.js';
import {NavItem} from './public/NavItem.js';
import MainContent from './public/main/MainContent.js';
import MainNav from './public/main/MainNav.js';
import PasswordsContent from './public/passwords/PasswordsContent.js';
import PasswordsNav from './public/passwords/PasswordsNav.js';
import React, { useState } from 'react';

const App = () => {
  const navItems = [
    new NavItem('Main', MainNav, MainContent),
    new NavItem('Passwords', PasswordsNav, PasswordsContent),
  ]

  const [activeContent, setActiveContent] = useState(navItems[0].getContent());
  return (
    <div id="main-div">
      <SideNav items={navItems} setActiveContent={setActiveContent}/>
      <Content items={[activeContent]}/>
    </div>
  );
}

export default App;
