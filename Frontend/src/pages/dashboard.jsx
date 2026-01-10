import Sidebar from "../components/Sidebar.jsx";
import TaskOverview from "../components/TaskOverview.jsx";
import TaskStatics from "../components/TaskStatics.jsx";

export default function Desboard() {
  return (
    <>
      <div className="flex min-h-screen w-full overflow-x-hidden lg:mt-2">
        {/* <Sidebar /> */}
        <TaskOverview />
        <TaskStatics />
      </div>
    </>
  );
}
