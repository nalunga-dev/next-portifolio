import Image from "next/image";

const workExperience = [
  {
    company: "Atomic Finance",
    title: "Bitcoin Protocol Engineer",
    logo: "https://portfolio-magicui.vercel.app/atomic.png",
    duration: "May 2021 - Oct 2022",
  },
  {
    company: "Shopify",
    title: "Software Engineer",
    logo: "https://portfolio-magicui.vercel.app/shopify.svg",
    duration: "January 2021 - April 2021",
  },
  {
    company: "Nvidia",
    title: "Software Engineer",
    logo: "https://portfolio-magicui.vercel.app/nvidia.png",
    duration: "January 2020 - April 2020",
  },
  {
    company: "Splunk",
    title: "Software Engineer",
    logo: "https://portfolio-magicui.vercel.app/splunk.svg",
    duration: "January 2019 - April 2019",
  },
  {
    company: "Lime",
    title: "Software Engineer",
    logo: "https://portfolio-magicui.vercel.app/lime.svg",
    duration: "January 2018 - April 2018",
  },
  {
    company: "Mitre Media",
    title: "Software Engineer",
    logo: "https://portfolio-magicui.vercel.app/mitremedia.png",
    duration: "May 2017 - August 2017",
  },
];

export default function WorkExperience() {
  return (
    <div className=" p-6">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-4">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white  "
          >
            <div className="w-12 h-12 flex-shrink-0 relative">
              <Image
                src={job.logo}
                alt={job.company}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{job.company}</h3>
              <p className="text-gray-600">{job.title}</p>
            </div>
            <p className="text-gray-500 text-sm">{job.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
