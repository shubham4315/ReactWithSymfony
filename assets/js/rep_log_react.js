import React from 'react';
import {render} from 'react-dom';
import RepLogApp from './RepLog/RepLogApp'; 
// const elem = React.createElement('h2',null,'Lift History',
//     React.createElement('span', null, ' ❤️'));

const shouldShowHeart = true;

render(<RepLogApp 
        withHeart={shouldShowHeart}/>,
        document.getElementById('lift-stuff-app'));