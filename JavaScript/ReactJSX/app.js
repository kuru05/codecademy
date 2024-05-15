import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here: 

//Ici, on a une concaténation
root.render(<h1>2 + 3</h1>);  

//Ici, grace aux {}, on peut faire une opération mathématique
root.render(<h1>{2 + 3}</h1>);  