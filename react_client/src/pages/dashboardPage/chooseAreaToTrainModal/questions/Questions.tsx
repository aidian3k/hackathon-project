import { FC, useEffect, useState } from "react";
import {
  mentalQuestions,
  MentalQuestionsType,
  physicalQuestions,
  PhysicalQuestionsType,
  QuestionsProps,
} from "./Questions.types";
import { Grid } from "@mui/material";
import { AreaTypes } from "../areas/Areas.types";
import PhysicalQuestions from "./PhysicalQuestions";
import MentalQuestions from "./MentalQuestions";
import { sendBuildUserGoalsRequest } from "../../../../api/buildUserGoals/sendBuildUserGoalsRequest";
import { setGoals } from "../../../../redux/goals/goals.slice";
import { useAppDispatch } from "../../../../utils/ReduxHooks";
import { GoalsResponse } from "../../../../redux/goals/goals.types";
import { BuildUserGoalsResponse } from "../../goalDetails/GoalDetails.types";

export const Questions: FC<QuestionsProps> = ({ areaType, onClose }) => {
  const [physicalAnswers, setPhysicalAnswers] =
    useState<PhysicalQuestionsType | null>(null);
  const [mentalAnswers, setMentalAnswers] =
    useState<MentalQuestionsType | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const map = new Map<string, string>();
    let keys;
    if (physicalAnswers) {
      keys = Object.keys(physicalAnswers);
      for (const key of keys) {
        map.set(
          physicalQuestions[key],
          physicalAnswers[key as keyof PhysicalQuestionsType]
        );
      }
    }
    if (mentalAnswers) {
      keys = Object.keys(mentalAnswers);
      for (const key of keys) {
        if (mentalAnswers) {
          map.set(
            mentalQuestions[key],
            mentalAnswers[key as keyof MentalQuestionsType].toString()
          );
        }
      }
    }
    if (areaType === AreaTypes.PHYSICAL || areaType === AreaTypes.MENTAL) {
      sendBuildUserGoalsRequest(map).then(
        // @ts-ignore
        (goalsResponse: BuildUserGoalsResponse[] | null) => {
          // TODO save to redux
          debugger;
          if (goalsResponse) {
            dispatch(setGoals(goalsResponse[0].goals));
            onClose();
          }
        }
      );
    } else if (
      areaType === AreaTypes.BOTH &&
      physicalAnswers &&
      mentalAnswers
    ) {
      // @ts-ignore
      sendBuildUserGoalsRequest(map).then(
        // @ts-ignore
        (goalsResponse: BuildUserGoalsResponse[] | null) => {
          // TODO save to redux
          debugger;
          if (goalsResponse) {
            dispatch(setGoals(goalsResponse[0].goals));
            onClose();
          }
        }
      );
    }
  }, [physicalAnswers, mentalAnswers]);

  const renderQuestions = () => {
    if (areaType === AreaTypes.PHYSICAL) {
      return <PhysicalQuestions onFormSubmit={setPhysicalAnswers} />;
    } else if (areaType === AreaTypes.MENTAL) {
      return <MentalQuestions onFormSubmit={setMentalAnswers} />;
    } else {
      if (physicalAnswers === null) {
        return <PhysicalQuestions onFormSubmit={setPhysicalAnswers} />;
      } else {
        return <MentalQuestions onFormSubmit={setMentalAnswers} />;
      }
    }
  };

  return <Grid container>{renderQuestions()}</Grid>;
};
