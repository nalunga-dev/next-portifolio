import Image from "next/image";

export default function EducationSkills() {
  const education = [
    {
      institution: "Buildspace",
      logo: "https://portfolio-magicui.vercel.app/buildspace.jpg",
      details: "s3, s4, sf1, s5",
      period: "2023 - 2024",
    },
    {
      institution: "University of Waterloo",
      logo: "https://portfolio-magicui.vercel.app/waterloo.png",
      details: "Bachelor's Degree of Computer Science (BCS)",
      period: "2016 - 2021",
    },
    {
      institution: "Wilfrid Laurier University",
      logo: "https://portfolio-magicui.vercel.app/laurier.png",
      details: "Bachelor's Degree of Business Administration (BBA)",
      period: "2016 - 2021",
    },
    {
      institution: "International Baccalaureate",
      logo: "https://portfolio-magicui.vercel.app/ib.png",
      details: "IB Diploma",
      period: "2012 - 2016",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ];

  return (
    <div className=" p-6">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={`${item.institution} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg">{item.institution}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.details}
                </p>
              </div>
              <div className="text-gray-500 text-right whitespace-nowrap">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
