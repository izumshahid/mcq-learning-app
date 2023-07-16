import CollapsableComponent from "../components/CollapsableComponent";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-5 mb-5">
        <div className="w-full lg:w-1/3 flex flex-col gap-5">
          <div className="w-full">
            <CollapsableComponent
              subject="General Aptitude"
              parent_link="/GeneralAptitude"
            />
          </div>

          <div className="w-full">
            <CollapsableComponent
              subject="Verbal and Reasoning"
              parent_link="/VerbalAndReasoning"
            />
          </div>
          <div className="w-full">
            <CollapsableComponent
              subject="Current Affairs & GK"
              parent_link="/CurrentAffairs&GK"
            />
          </div>
          <div className="w-full">
            <CollapsableComponent
              subject="Medical Science"
              parent_link="/MedicalScience"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-5">
          <div className="w-full">
            <CollapsableComponent
              subject="Interview"
              parent_link="/Interview"
            />
          </div>

          <div className="w-full">
            <CollapsableComponent
              subject="Engineering"
              parent_link="/Engineering"
            />
          </div>
          <div className="w-full">
            <CollapsableComponent
              subject="Programming"
              parent_link="/Programming"
            />
          </div>
          <div className="w-full">
            <CollapsableComponent subject="Puzzles" parent_link="/Puzzles" />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-5">
          <div className="w-full">
            <CollapsableComponent
              subject="Online Tests"
              parent_link="/OnlineTests"
            />
          </div>

          <div className="w-full">
            <CollapsableComponent
              subject="Technical MCQs"
              parent_link="/TechnicalMCQs"
            />
          </div>
          <div className="w-full">
            <CollapsableComponent
              subject="Technical Short Answers"
              parent_link="/TechnicalShortAnswers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
