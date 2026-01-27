import TaskOverview from "../components/TaskOverview.jsx";
import TaskStatics from "../components/TaskStatics.jsx";

export default function Dashboard() {
  return (
    <>
      <div className="w-full  lg:flex lg:min-h-screen lg:w-full overflow-x-hidden lg:mt-2">
        {/* <Sidebar /> */}
        <TaskOverview />
        <div>
          <TaskStatics />
        </div>
      </div>
    </>
  );
}
