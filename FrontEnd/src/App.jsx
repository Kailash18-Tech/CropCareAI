// function App() {
//   return (
//     <div>
//       <h1>CropCare AI</h1>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";

// function App() {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// }

// export default App;

import PublicHeader from './components/public/PublicHeader';
import Home from './pages/public/Home';
import AppRoutes from './routes/AppRoutes';
import './styles/Public.css';

function App() {
  return (
    <>
      <PublicHeader />
      <AppRoutes />
    </>
  );
}

export default App;