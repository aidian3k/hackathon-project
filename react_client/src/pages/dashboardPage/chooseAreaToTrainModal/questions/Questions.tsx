import { FC, useEffect, useState } from "react";
import {
  MentalQuestionsType,
  PhysicalQuestionsType,
  QuestionsProps,
} from "./Questions.types";
import { Grid } from "@mui/material";
import { AreaTypes } from "../areas/Areas.types";
import PhysicalQuestions from "./PhysicalQuestions";
import MentalQuestions from "./MentalQuestions";

export const Questions: FC<QuestionsProps> = ({ areaType }) => {
  const [physicalAnswers, setPhysicalAnswers] =
    useState<PhysicalQuestionsType | null>(null);
  const [mentalAnswers, setMentalAnswers] =
    useState<MentalQuestionsType | null>(null);

  useEffect(() => {
    if (physicalAnswers && mentalAnswers) {
      console.log(physicalAnswers);
      console.log(mentalAnswers);
    }
  }, [physicalAnswers, mentalAnswers]);

  const renderQuestions = () => {
    if (areaType === AreaTypes.PHYSICAL) {
      return <PhysicalQuestions onFormSubmit={setPhysicalAnswers} />;
    } else if (areaType === AreaTypes.MENTAL) {
      return <MentalQuestions onFormSubmit={setMentalAnswers} />;
    } else {
      if (physicalAnswers === null) {
        debugger;
        return <PhysicalQuestions onFormSubmit={setPhysicalAnswers} />;
      } else {
        return <MentalQuestions onFormSubmit={setMentalAnswers} />;
      }
    }
  };

  return <Grid container>{renderQuestions()}</Grid>;
};
