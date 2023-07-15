import HOME_IMAGE from "../assets/home.png";
import ABC_IMAGE from "../assets/abcGreen.png";
import CURRNET_AFFAIR_IMAGE from "../assets/affairsGKGreen.png";
import APTITUDE_IMAGE from "../assets/gerApititeGreen.png";
import INTERVIEW_IMAGE from "../assets/interviewGreen.png";
import VERBAL_IMAGE from "../assets/verbalAndReasonGreen.png";

export const NAV_ARRAY = [
  {
    link: "/",
    title: "Home",
    img: HOME_IMAGE,
  },
  {
    link: "/GeneralAptitude",
    title: "General Aptitude",
    img: APTITUDE_IMAGE,
    children: [
      {
        link: "/child1",
        title: "Child 1",
      },
      {
        link: "/child2",
        title: "Child 2",
      },
      {
        link: "/child3",
        title: "Child 3",
      },
      {
        link: "/child4",
        title: "Child 4",
      },
    ],
  },
  {
    link: "/VerbalAndReasoning",
    title: "Verbal and Reasoning",
    img: VERBAL_IMAGE,
  },
  {
    link: "/CurrentAffairs&GK",
    title: "Current Affairs & GK",
    img: CURRNET_AFFAIR_IMAGE,
  },
  {
    link: "/Interview",
    title: "Interview",
    img: INTERVIEW_IMAGE,
  },
  {
    link: "/Engineering",
    title: "Engineering",
    img: ABC_IMAGE,
  },
  {
    link: "/Programming",
    title: "Programming",
    img: ABC_IMAGE,
  },
  {
    link: "/OnlineTests",
    title: "Online Tests",
    img: ABC_IMAGE,
  },
  {
    link: "/TechnicalMCQs",
    title: "Technical MCQs",
    img: ABC_IMAGE,
  },
  {
    link: "/TechnicalShortAnswers",
    title: "Technical Short Answers",
    img: ABC_IMAGE,
  },
  {
    link: "/MedicalScience",
    title: "Medical Science",
    img: ABC_IMAGE,
  },
  {
    link: "/Puzzles",
    title: "Puzzles",
    img: ABC_IMAGE,
  },
];
