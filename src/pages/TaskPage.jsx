import { useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100 cursor-pointer"
          >
            <FaArrowLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center p-6">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 justify-center rounded-md">
          <h2 className="text-3xl text-blue-950 font-bold text-center p-1">
            {title}
          </h2>
          <p className="text-blue-950 font-medium text-center p-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
