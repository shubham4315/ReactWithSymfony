import { getElementById } from 'domutils';
import React from 'react';
import ReactDom from 'react-dom';

const elem = React.createElement('h2',null,'Lift History',
    React.createElement('span', null, ' ❤️'));

ReactDom.render(elem,document.getElementById('lift-stuff-app'));