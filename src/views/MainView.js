import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Module from '../components/Module/Module';
import Paragraph from '../components/Paragraph/Paragraph';

const MainView = () => (
  <div>
    <Button>Zaloguj się</Button>
    <Input placeholder="Imię" />
    <Module width="300px" height="800px" title="Wydatki">
      <Paragraph>Hello</Paragraph>
    </Module>
  </div>
);

export default MainView;
