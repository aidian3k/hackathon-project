import React, { FC, useEffect, useState } from "react";
import { ChooseAreaToTrainModal } from "./chooseAreaToTrainModal/ChooseAreaToTrainModal";
import { MainDashBoardPage } from "./main-dashboard/MainDashBoardPage";
import { CircularProgress } from "@mui/material";
import apiService from "../../api/baseAxiosConfiguration";

export const DashboardPage: FC = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchTrainModalFlag().then(() => {
      setIsFetching(false);
    });
  }, []);

  const fetchTrainModalFlag = async () => {
    setIsFetching(true);
    await apiService.get("/api/shouldOpenTrainModal").then((result) => {
      setShouldOpenModal(result.data as boolean);
    });
  };

  if (isFetching) {
    return (
      <div
        className={
          "w-full h-screen flex flex-col items-center justify-center gap-10 font-sans font-semibold text-xl"
        }
      >
        <CircularProgress color={"secondary"} size={75} />
        <p>We are fetching data for you!</p>
      </div>
    );
  }

  return (
    <>
      <MainDashBoardPage />
      <ChooseAreaToTrainModal isOpened={shouldOpenModal} />
    </>
  );
};

export default DashboardPage;
