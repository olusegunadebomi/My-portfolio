import SubHeader from "@/app/UI/SubHeading/page";
import { LuTerminal } from "react-icons/lu";

function Experience() {
  const experiences = [
    {
      period: "Nov 2024 — Present",
      role: "Senior Engineer • Errandman",
      company: "Errandman",
      points: [
        "Built and maintained features for a bike ride-booking platform.",
        "Integrated backend APIs and worked closely with the existing codebase.",
        "Improved and maintained the React Native application for smooth performance.",
        "Helped migrate parts of the mobile application from JavaScript to TypeScript.",
      ],
    },
    {
      period: "Jun 2024 — Jul 2025",
      role: "Frontend Engineer • Telygence AI",
      company: "Various Projects",
      points: [
        "Worked as the main frontend developer on an AI-focused startup product.",
        "Built responsive and interactive interfaces using React and TypeScript.",
        "Collaborated with the team to develop and refine product features.",
        "Contributed to a product that was developed but ultimately not launched.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        border-b
        border-border
        bg-background
        text-foreground
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-12
          sm:px-8
          md:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* Heading */}
        <div className="mb-8">
          <p className="font-mono text-sm text-primary">/experience</p>

          <h2 className="hero mt-2 font-bold">Work Experience</h2>

          <div className="mt-3 max-w-2xl">
            <SubHeader
              title="Where I've worked."
              title2=" My experience building products, working with teams and solving real-world problems."
            />
          </div>
        </div>

        {/* Experience timeline */}
        <div
          className="
            border-y
            border-border
            py-8
            lg:py-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-2
              lg:gap-x-16
            "
          >
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              {experiences
                .filter((_, index) => index % 2 === 0)
                .map((experience, index) => (
                  <ExperienceItem
                    key={experience.company}
                    experience={experience}
                    number={index}
                  />
                ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              {experiences
                .filter((_, index) => index % 2 !== 0)
                .map((experience, index) => (
                  <ExperienceItem
                    key={experience.company}
                    experience={experience}
                    number={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  number,
}: {
  experience: {
    period: string;
    role: string;
    company: string;
    points: string[];
  };
  number: number;
}) {
  return (
    <div className="relative pl-10">
      {/* Vertical timeline */}
      <div
        className="
          absolute
          left-[5px]
          top-2
          bottom-[-32px]
          w-px
          bg-border
        "
      />

      {/* Timeline dot */}
      <div
        className="
          absolute
          left-0
          top-1
          flex
          size-3
          items-center
          justify-center
          rounded-full
          border
          border-primary
          bg-background
          shadow-[0_0_10px_rgba(0,232,137,0.25)]
        "
      >
        <span
          className="
            size-1.5
            rounded-full
            bg-[#5EA7FF]
            shadow-[0_0_8px_rgba(94,167,255,0.9)]
          "
        />
      </div>

      {/* Green terminal marker */}
      <span
        className="
          absolute
          left-[22px]
          top-[1px]
          font-mono
          text-xs
          text-primary
        "
      >
        {number % 2 === 0 ? "›" : "↳"}
      </span>

      {/* Experience content */}
      <div className="font-mono">
        <p
          className="
            text-xs
            font-semibold
            text-foreground
            sm:text-sm
          "
        >
          {experience.period}
        </p>

        <p
          className="
            mt-0.5
            text-xs
            font-semibold
            text-foreground
            sm:text-sm
          "
        >
          {experience.role}
          <span className="text-terminal-key"> • {experience.company}</span>
        </p>

        {/* Description points */}
        <ul className="mt-2 space-y-1">
          {experience.points.map((point) => (
            <li
              key={point}
              className="
                flex
                items-start
                gap-2
                text-[10px]
                leading-4
                text-muted
                sm:text-xs
              "
            >
              <span className="shrink-0 text-terminal-key">•</span>

              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
