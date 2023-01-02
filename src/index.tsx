import { createRoot } from 'react-dom/client';
import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <h1>Hello Pokemons!!</h1>,
  );