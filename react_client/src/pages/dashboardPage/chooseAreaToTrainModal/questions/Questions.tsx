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

export const Questions: FC<QuestionsProps> = ({ areaType }) => {
  const [physicalAnswers, setPhysicalAnswers] =
    useState<PhysicalQuestionsType | null>(null);
  const [mentalAnswers, setMentalAnswers] =
    useState<MentalQuestionsType | null>(null);

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
      sendBuildUserGoalsRequest(map);
    } else if (
      areaType === AreaTypes.BOTH &&
      physicalAnswers &&
      mentalAnswers
    ) {
      sendBuildUserGoalsRequest(map);
    }
    // if (
    //   physicalAnswers?.fitnessAppsAndDevices &&
    //   mentalAnswers?.interpersonalDevelopmentGoals
    // ) {
    //   sendBuildUserGoalsRequest(map);
    // } else if (
    //   physicalAnswers?.fitnessAppsAndDevices ||
    //   mentalAnswers?.interpersonalDevelopmentGoals
    // ) {
    //   sendBuildUserGoalsRequest(map);
    // }
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
