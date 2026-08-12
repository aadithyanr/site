import { ExperienceCard } from "../ui/ExperienceCard";
import { experienceItems } from "@/content/experience/experiences";
import { impactItems } from "@/content/experience/experiences";

export default function Experiences() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-1 text-xl font-bold">Experiences</h1>
        <ul className="animated-list mt-5 cursor-pointer space-y-7">
          {experienceItems.map((item, index) => (
            <li key={index}>
              <ExperienceCard key={index} item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-xl font-bold">Impact</h1>
        <ul className="space-y-7">
          {impactItems.map((item, index) => (
            <li key={index}>
              <ExperienceCard key={index} item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}