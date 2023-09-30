import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Self-Assessment',
        description: 'Start by assessing your current health status through a comprehensive check-up. This will help you understand your baseline health metrics, identify any existing health issues, and determine your starting point on your health journey.',
        practicalSteps: [
            'Schedule a visit with your healthcare provider for a thorough check-up.',
            'Discuss your medical history, family history, and any concerns you may have.',
            'Complete recommended tests and screenings, such as blood pressure, cholesterol, and body composition measurements.',
        ],
    },
    {
        label: 'Goal Setting',
        description: 'Define clear and specific health goals based on the assessment. Your goals should be measurable, achievable, and tailored to your unique health needs and aspirations.',
        practicalSteps: [
            "Reflect on what you want to achieve with your health, whether it's weight loss, improved fitness, better mental health, or managing a specific condition.",
            'Break down your long-term goals into smaller, achievable milestones.',
            'Write down your goals and create a timeline for achieving them.',
        ],
    },
    {
        label: 'Education and Knowledge',
        description: 'Begin your journey by acquiring knowledge about health through books, courses, and online resources. Understanding the science behind health and wellness can empower you to make informed choices.',
        practicalSteps: [
            'Read books and articles on nutrition, exercise, mental health, and overall well-being.',
            'Enroll in relevant online courses or workshops to deepen your knowledge.',
            'Follow reputable health websites and experts on social media for the latest updates and insights.',
        ],
    },
    {
        label: 'Nutrition',
        description: 'Consult a registered dietitian to create a personalized nutrition plan and implement healthy eating habits. Proper nutrition is fundamental to your overall health and well-being.',
        practicalSteps: [
            'Schedule an appointment with a registered dietitian or nutritionist for an assessment.',
            'Discuss your dietary preferences, goals, and any dietary restrictions.',
            'Work with the dietitian to create a balanced and sustainable meal plan.',
            'Learn about portion control, mindful eating, and how to read food labels.',
            'Start cooking at home to have more control over your food choices and ingredients.',
        ],
    },
    {
        label: 'Physical Activity',
        description: 'Develop a regular exercise routine that aligns with your health goals. Exercise is vital for physical fitness, strength, and overall well-being.',
        practicalSteps: [
            "Identify the type of exercise you enjoy, whether it's cardio, strength training, yoga, or a combination.",
            'Set realistic fitness goals, such as the number of workouts per week and duration.',
            'Consider hiring a certified personal trainer for tailored guidance and support.',
            'Create a workout schedule and stick to it consistently.',
            'Track your progress by recording your workouts and noting improvements over time.',
        ],
    },
    {
        label: 'Mental Health',
        description: 'Focus on mental well-being through mindfulness practices, therapy, and self-care. A healthy mind is essential for overall health and happiness.',
        practicalSteps: [
            'Practice mindfulness meditation to reduce stress and enhance emotional well-being.',
            "Consider seeking therapy or counseling if you're dealing with specific mental health challenges.",
            'Read books and articles on mental health, resilience, and emotional intelligence.',
            'Establish a daily self-care routine that includes activities you enjoy, such as hobbies, relaxation, or spending time with loved ones.',
        ],
    },
    {
        label: 'Sleep',
        description: 'Prioritize sleep by creating a conducive environment and maintaining a consistent sleep schedule. Quality sleep is crucial for physical and mental restoration.',
        practicalSteps: [
            'Ensure your bedroom is dark, quiet, and comfortable for optimal sleep conditions.',
            'Set a regular sleep schedule, going to bed and waking up at the same times each day, even on weekends.',
            'Avoid caffeine and electronic devices before bedtime to promote better sleep quality.',
            'Consider incorporating relaxation techniques, such as deep breathing or progressive muscle relaxation, to improve sleep.',
        ],
    },
    {
        label: 'Stress Management',
        description: "Learn and practice stress-reduction techniques to enhance your ability to cope with life's challenges and maintain good health.",
        practicalSteps: [
            'Identify your stress triggers and sources of stress in your life.',
            'Learn stress-relief techniques like deep breathing exercises, meditation, and yoga.',
            "Incorporate stress-reduction activities into your daily routine, even if it's just for a few minutes.",
            'Consider setting boundaries and saying "no" when necessary to reduce unnecessary stressors.',
        ],
    },
    {
        label: 'Social Support',
        description: 'Share your health goals with friends and family to build a support system that encourages and motivates you along your journey.',
        practicalSteps: [
            'Communicate openly with loved ones about your health goals and why they matter to you.',
            'Engage in physical activities or health-related hobbies with friends or family members.',
            'Consider joining support groups or online communities focused on your specific health goals for additional encouragement and advice.',
        ],
    },
    {
        label: 'Regular Check-Ins',
        description: 'Schedule follow-up appointments with healthcare professionals and specialists to monitor your progress and address any health concerns.',
        practicalSteps: [
            'Maintain a calendar or journal to track upcoming healthcare appointments and health-related tasks.',
            'Prepare questions and topics to discuss with your healthcare providers during appointments.',
            'Be proactive in seeking medical advice or guidance when you encounter health challenges or changes in your condition.',
        ],
    },
    {
        label: 'Track Your Progress',
        description: 'Use health tracking apps and devices to monitor your physical activity, nutrition, and sleep, helping you stay accountable and make data-driven decisions.',
        practicalSteps: [
            'Research and choose health tracking apps and devices that suit your needs and goals.',
            'Set up and sync these tools to record data automatically, such as steps taken, calories consumed, and sleep patterns.',
            'Regularly review and analyze your data to identify trends, areas for improvement, and successes.',
            'Adjust your habits and routines based on the insights you gather from tracking your health metrics.',
        ],
    },
    {
        label: 'Celebrate Achievements',
        description: 'Reward yourself when you achieve milestones along your health journey, reinforcing positive behaviors and motivating continued progress.',
        practicalSteps: [
            'Define specific milestones, such as reaching a certain weight, running a particular distance, or consistently managing stress levels.',
            'Plan rewards that align with your achievements, such as treating yourself to a healthy meal at your favorite restaurant or buying fitness gear.',
            'Share your achievements with your support network to celebrate together and build motivation.',
        ],
    },
    {
        label: 'Stay Informed',
        description: 'Continuously educate yourself about health-related topics to stay updated on the latest research, trends, and best practices.',
        practicalSteps: [
            'Subscribe to health and wellness newsletters, journals, or magazines to receive regular updates.',
            'Follow reputable health experts, organizations, and blogs on social media platforms for current information.',
            'Attend seminars, webinars, or workshops on health-related topics to deepen your knowledge.',
        ],
    },
    {
        label: 'Long-Term Sustainability',
        description: 'Make sustainable changes that you can maintain over the long term, ensuring that your health improvements are lasting and not just temporary.',
        practicalSteps: [
            'Avoid extreme diets or workout routines that are difficult to sustain over time.',
            'Focus on building healthy habits and routines that become a natural part of your lifestyle.',
            'Continuously reassess and adapt your health practices to fit your changing needs and circumstances.',
        ],
    },
    {
        label: 'Regular Reassessment',
        description: 'Periodically reassess your goals and adjust your roadmap as needed to account for changes in your health, lifestyle, or priorities.',
        practicalSteps: [
            'Schedule regular check-ins with yourself to evaluate your progress and setbacks.',
            'Review your initial health goals and consider whether they need modification or expansion.',
            'Seek advice from healthcare professionals or experts when making significant adjustments to your health plan.',
        ],
    },
];

export default function GoalDetailsStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 1200 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === steps.length-1 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Done'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}