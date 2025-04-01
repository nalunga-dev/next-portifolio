export default function MyProjects() {
  return (
    <section className=" text-center py-12 px-6">
      <span className="bg-black text-white text-sm px-3 py-1 rounded-full font-medium">
        My Projects
      </span>
      <h2 className="text-3xl font-bold mt-4">Check out my latest work</h2>
      <p className="text-gray-600 mt-2 text-lg">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className=" projectCards  grid md:grid-cols-2 gap-4 mt-8">
        <div className=" Project1 border-b-gray-0 rounded-2xl p-5 shadow-lg">
          <img
            src="https://img.freepik.com/premium-photo/african-man-with-smartphone-speech-bubbles_780608-10178.jpg?ga=GA1.1.1231290701.1738956793&semt=ais_hybrid"
            alt="Chat Collect"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-3">Chat Collect</h3>
          <p className="text-gray-600 text-sm">Jan 2024 - Feb 2024</p>
          <p className="text-gray-700 mt-2 text-sm">
            With the release of the{" "}
            <a href="#" className="text-blue-500">
              OpenAI GPT Store
            </a>
            , I decided to build a SaaS which allows users to collect email
            addresses from their GPT users. This is a great way to build an
            audience and monetize your GPT API usage.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Next.js",
              "Typescript",
              "PostgreSQL",
              "Prisma",
              "TailwindCSS",
              "Shadcn UI",
              "Magic UI",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
            🌍 Website
          </button>
        </div>
        <div className=" project2  border-b-gray-0  rounded-2xl p-5 shadow-lg">
          <img
            src="https://img.freepik.com/premium-photo/hand-woman-typing-laptop-keyboard_274679-49129.jpg?ga=GA1.1.1231290701.1738956793&semt=ais_hybrid"
            alt="Magic UI"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-3">Magic UI</h3>
          <p className="text-gray-600 text-sm">June 2023 - Present</p>
          <p className="text-gray-700 mt-2 text-sm">
            Designed, developed and sold animated UI components for developers.
          </p>
          <div className="flex flex-wrap gap-2 mt-9">
            {[
              "Next.js",
              "Typescript",
              "PostgreSQL",
              "Prisma",
              "TailwindCSS",
              "Stripe",
              "Shadcn UI",
              "Magic UI",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className=" flex gap-3 mt-9">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              🌍 Website
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              📂 Source
            </button>
          </div>
        </div>
        <div className=" project3  border-b-gray-0  rounded-2xl p-5 shadow-lg">
          <img
            src="https://img.freepik.com/premium-photo/phone-message-icon-black-woman-chat-online-dating-communication-texting-social-media-smile-sms-overlay-happy-african-person-typing-mobile-app-website-digital-network-home_590464-222499.jpg?ga=GA1.1.1231290701.1738956793&semt=ais_hybrid"
            alt="Chat Collect"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-3">Chat Collect</h3>
          <p className="text-gray-600 text-sm">Jan 2024 - Feb 2024</p>
          <p className="text-gray-700 mt-2 text-sm">
            With the release of the{" "}
            <a href="#" className="text-blue-500">
              OpenAI GPT Store
            </a>
            , I decided to build a SaaS which allows users to collect email
            addresses from their GPT users. This is a great way to build an
            audience and monetize your GPT API usage.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Next.js",
              "Typescript",
              "PostgreSQL",
              "Prisma",
              "TailwindCSS",
              "Shadcn UI",
              "Magic UI",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded-md">
            🌍 Website
          </button>
        </div>
        <div className=" project4  border-b-gray-0  rounded-2xl p-5 shadow-lg">
          <img
            src="https://img.freepik.com/free-photo/close-up-smiley-friends-with-phone_23-2149088377.jpg?ga=GA1.1.1231290701.1738956793&semt=ais_hybrid"
            alt="Magic UI"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-3">Magic UI</h3>
          <p className="text-gray-600 text-sm">June 2023 - Present</p>
          <p className="text-gray-700 mt-2 text-sm">
            Designed, developed and sold animated UI components for developers.
          </p>
          <div className="flex flex-wrap gap-2 mt-9">
            {[
              "Next.js",
              "Typescript",
              "PostgreSQL",
              "Prisma",
              "TailwindCSS",
              "Stripe",
              "Shadcn UI",
              "Magic UI",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-9">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              🌍 Website
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              📂 Source
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
