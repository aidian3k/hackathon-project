import { AreaTypes } from '../areas/Areas.types';

export interface QuestionsProps {
  areaType: AreaTypes;
  onClose: () => void;
}

export interface PhysicalQuestionsProps {
  onFormSubmit: (answers: PhysicalQuestionsType) => void;
}

export interface MentalQuestionsProps {
  onFormSubmit: (answers: MentalQuestionsType) => void;
}

export type PhysicalQuestionsType = {
  physicalConditionRating: string;
  participationInPhysicalActivity: string;
  physicalDevelopmentGoals: string;
  healthLimitations: string;
  favoritePhysicalActivity: string;
  physicalActivityPreferences: string;
  dietaryHabits: string;
  fitnessAppsAndDevices: string;
};

export type MentalQuestionsType = {
  actionsForMentalHealth: string[];
  relaxationTechniques: string;
  stressManagementSkillsRating: number;
  emotionalDevelopmentGoals: string[];
  exploringNewMentalDevelopmentTechniques: boolean;
  meditationExperience: string;
  readingAndBooks: string;
  supportFromMentorsCoachesTherapists: string[];
  stressManagementStrategy: string;
  interpersonalDevelopmentGoals: string[];
};

export const physicalQuestions: Record<string, string> = {
  physicalConditionRating:
    'How would you rate your overall physical condition on a scale of 1 to 10, where 1 is very poor, and 10 is excellent?',
  participationInPhysicalActivity:
    'Do you regularly engage in any physical activities (e.g., running, cycling, gym workouts)? If so, how often?',
  physicalDevelopmentGoals: 'Do you have any physical development goals (e.g., weight loss, strength gain)? If so, what are they?',
  healthLimitations: 'Do you have any health limitations or injuries that may affect your ability to perform physical exercises?',
  favoritePhysicalActivity: 'What is your favorite form of physical activity, and why?',
  physicalActivityPreferences:
    'Do you have any preferences for specific types of physical activities (e.g., cardio, strength training, yoga)? If so, what are they?',
  dietaryHabits: 'What are your current dietary habits, and are you considering any dietary changes for better health?',
  fitnessAppsAndDevices:
    'Do you use any apps or devices to track your fitness progress (e.g., running apps, fitness trackers)? If so, which ones?'
};

export const mentalQuestions: Record<string, string> = {
  actionsForMentalHealth: 'What actions do you take to maintain your mental health (e.g., meditation, reading, talking to friends)?',
  relaxationTechniques: 'Have you tried relaxation techniques such as deep breathing or yoga? If so, which ones have you used?',
  stressManagementSkillsRating:
    'On a scale of 1 to 10, how would you rate your stress management skills, where 1 is very poor, and 10 is very good?',
  emotionalDevelopmentGoals:
    'Do you have any goals related to emotional development (e.g., improving self-acceptance, better emotional control)? If so, what are they?',
  exploringNewMentalDevelopmentTechniques:
    'Are you open to trying new mental development techniques, such as stress management training or time management strategies?',
  meditationExperience:
    'Do you have any experience with meditation? If yes, how long have you practiced, and what benefits have you noticed?',
  readingAndBooks:
    'Do you regularly read books or listen to podcasts related to personal development? If so, what was the last book or podcast you consumed?',
  supportFromMentorsCoachesTherapists:
    'Do you receive support from mentors, coaches, or therapists for personal development? If so, who provides this support?',
  stressManagementStrategy:
    'Do you have a stress management strategy in place, either at work or in your daily life? If so, what techniques do you use?',
  interpersonalDevelopmentGoals:
    'Do you have any specific goals related to interpersonal development (e.g., improving communication, developing empathy)? If so, what are they?'
};
