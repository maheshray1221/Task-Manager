import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Desboard from "./pages/Dashboard";
import LandingPage from "./pages/landingPage";
import Layout from "./pages/Layout";
import AllTask from "./pages/AllTask";
import Statictise from "./pages/Statictise";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";
import Register from "./pages/auth/register";

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
            <Route index element={<Desboard />} />
            <Route path="dashboard" element={<Desboard />} />
            <Route path="allTasks" element={<AllTask />} />
            <Route path="taskStatics" element={<Statictise />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/updateTask" element={<UpdateTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
