import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {App} from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
          <Route path="/" element={<App />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);

