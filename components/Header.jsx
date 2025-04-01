import Image from "next/image";

export default function Header() {
  return (
    <div className="  p-6 text-gray-900">
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m Dillion <span className="inline-block">👋</span>
        </h1>
        <Image
          src="https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-14.webp"
          alt="Dillion's Profile"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <p className="mt-2 text-lg text-gray-700">
        Software Engineer turned Entrepreneur. I love building things and
        helping people. Very active on Twitter.
      </p>

      <div className="mt-9">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-gray-700 mt-2">
          At the end of 2022, I quit my job as a software engineer to go
          full-time into building and scaling my own SaaS businesses. In the
          past,{" "}
          <a href="#" className="text-blue-600 underline">
            I pursued a double degree in computer science and business
          </a>
          ,
          <a href="#" className="text-blue-600 underline">
            {" "}
            interned at big tech companies in Silicon Valley
          </a>
          , and
          <a href="#" className="text-blue-600 underline">
            {" "}
            competed in over 21 hackathons for fun
          </a>
          . I also had the pleasure of being a part of the first-ever in-person
          cohort of buildspace called{" "}
          <a href="#" className="text-blue-600 underline">
            buildspace sf1
          </a>
          .
        </p>
      </div>
    </div>
  );
}
