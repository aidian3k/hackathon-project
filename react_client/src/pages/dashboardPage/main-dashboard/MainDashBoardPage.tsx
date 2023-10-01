import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import apiService from "../../../api/baseAxiosConfiguration";
import { API_TOKEN } from "../../../api/session";
import LinearProgress from "@mui/material/LinearProgress";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../utils/ReduxHooks";
import GoalDetails from "../goalDetails/GoalDetails";
import { Goal } from "../goalDetails/GoalDetails.types";

export const MainDashBoardPage: FC = () => {
  const goals = useAppSelector((state: RootState) => state.goals.goals);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const goBack = () => {
    setSelectedGoal(null);
  };

  // @ts-ignore
  return (
    <>
      <DashBoardNavbar />
      {selectedGoal ? (
        <GoalDetails goal={selectedGoal} />
      ) : (
        <div
          style={{
            backgroundImage:
              'url("https://img.freepik.com/premium-vector/abstract-medical-background-with-hexagons-pattern-concepts-ideas-healthcare-technology-innovation-medicine-health-science-research_120542-537.jpg")',
          }}
        >
          <div className={"flex items-center justify-center"}>
            <h1 className="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 mt-2">
              Your active tasks
            </h1>
          </div>
          <div className={"grid grid-cols-2 gap-2"}>
            <GoalElement
              typeOfGoal={"Mental"}
              titleOfSubGoal={"Learning how to deal with stress"}
              description={
                "Mental health refers to a person's emotional, psychological, and social well-being. It encompasses an individual's ability to manage stress, cope with life's challenges, maintain positive relationships."
              }
            />
            <GoalElement
              typeOfGoal={"Mental"}
              titleOfSubGoal={"Learning how to deal with stress"}
              description={
                "Mental health refers to a person's emotional, psychological, and social well-being. It encompasses an individual's ability to manage stress, cope with life's challenges, maintain positive relationships."
              }
            />
            <GoalElement
              typeOfGoal={"Mental"}
              titleOfSubGoal={"Learning how to deal with stress"}
              description={
                "Mental health refers to a person's emotional, psychological, and social well-being. It encompasses an individual's ability to manage stress, cope with life's challenges, maintain positive relationships."
              }
            />
            <GoalElement
              typeOfGoal={"Mental"}
              titleOfSubGoal={"Learning how to deal with stress"}
              description={
                "Mental health refers to a person's emotional, psychological, and social well-being. It encompasses an individual's ability to manage stress, cope with life's challenges, maintain positive relationships."
              }
            />
          </div>
          <div className={"flex items-center justify-center"}>
            <h1 className="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 mt-2">
              Recommended goals
            </h1>
          </div>
          <div className={"grid grid-cols-2 gap-10"}>
            {goals?.map((goal, index) => (
              <GoalElement
                key={index}
                typeOfGoal={"Mental"}
                titleOfSubGoal={goal.title}
                goal={goal}
                goBack={goBack}
                openGoalDetails={setSelectedGoal}
                description={goal.description}
              />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export const GoalElement: FC<{
  description: string;
  typeOfGoal: string;
  titleOfSubGoal: string;
  goal?: Goal;
  openGoalDetails?: Dispatch<SetStateAction<Goal | null>>;
  goBack?: () => void;
}> = (props) => {
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl cursor-pointer hover:scale-105"
      onClick={() => props.openGoalDetails?.(props.goal ?? null)}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={69} />
      </Box>
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220124072653/ri/1350/src/images/Article_Images/ImageForArticle_22028_16430272124432966.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {props.typeOfGoal}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {props.titleOfSubGoal}
          </a>
          <p className="mt-2 text-slate-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export const Footer: FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 w-full mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 gap-2">
            <img
              src={"https://www.svgrepo.com/show/299015/dolphin.svg"}
              style={{ width: "30px", height: "30px" }}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Healthy Dolphin
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a className={"hover:underline"}>Healthy Dolphin™</a>. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export const DashBoardNavbar: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const logoutUser = async () => {
    setLoading(true);
    await apiService.post("/api/logout").catch(() => navigate("/"));
    setLoading(false);
    localStorage.removeItem(API_TOKEN);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/dashboard" className="flex items-center gap-2">
          <img
            src={"https://www.svgrepo.com/show/299015/dolphin.svg"}
            style={{ width: "30px", height: "30px" }}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Healthy Dolphin
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <button
                className={
                  "rounded-xl bg-blue-500 px-2 py-1 transition-all hover:scale-105"
                }
                onClick={() => navigate("/dashboard")}
              >
                <p className={"text-lg font-sans font-semibold text-white"}>
                  Home
                </p>
              </button>
            </li>
            <li>
              <button
                className={
                  "rounded-xl bg-blue-500 px-2 py-1 transition-all hover:scale-105"
                }
              >
                <p
                  className={"text-lg font-sans font-semibold text-white"}
                  onClick={logoutUser}
                >
                  {!loading ? (
                    <p>Logout</p>
                  ) : (
                    <p className={"flex gap-2 justify-center items-center"}>
                      Loading <CircularProgress size={20} color={"secondary"} />
                    </p>
                  )}
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
