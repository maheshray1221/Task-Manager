import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Layout from "./pages/Layout.jsx";
import AllTask from "./pages/AllTask.jsx";
import Statictise from "./pages/Statictise.jsx";
import CreateTask from "./components/CreateTask.jsx";
import UpdateTask from "./components/UpdateTask.jsx";
import Register from "./pages/auth/authentication.jsx";
import MobileView from "./pages/MobileView.jsx";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col 
      bg-[linear-gradient(50deg,#cde0f0_0%,#cde0f0_30%,#ffffff_55%,#ebceea_100%)]"
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/protask" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="allTasks" element={<AllTask />} />
            <Route path="taskStatics" element={<Statictise />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/updateTask/:id" element={<UpdateTask />} />
          <Route path="/mobileview" element={<MobileView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
