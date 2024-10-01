
import Image from "next/image";
const Resume = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-10 flex flex-col items-center gap-1">
      <Image className="rounded-full" src="/images/ashkan.jpg" alt="ASHKAN SABBAGHI" width={150} height={150} />
      <h1 className="text-4xl font-bold text-gray-800">ASHKAN SABBAGHI</h1>
        <p className="text-xl text-gray-600">Front-End Developer</p>
        <p className="text-gray-600">Iran, Alborz | 1994</p>
        <div className="text-center">
          <p className="text-gray-600">
            <a href="mailto:ashkansabbaghi73@gmail.com" className="text-blue-500 hover:underline">
              ashkansabbaghi73@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            <a href="tel:09102626830" className="text-blue-500 hover:underline">
              09102626830
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com/ashkansabbaghi" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ashkan-sabbaghi-developer/" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Experience</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800">Front-End Developer - Irapardaz</h3>
          <p className="text-gray-600">Sep 2022 - Present</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Developed multiple services like Speech to Text, Text to Address, and more.</li>
            <li>Enhanced SEO performance using SSR and optimized web pages.</li>
            <li>Designed and implemented responsive web pages, focusing on PWA features.</li>
            <li>Managed and mentored new front-end developers and collaborated cross-functionally.</li>
          </ul>
          <a href="https://irapardaz.ir" className="text-blue-500 hover:underline">Visit Irapardaz</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800">Front-End Developer - Ashstooore (Personal Project)</h3>
          <p className="text-gray-600">Apr 2022 - Aug 2022</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Implemented SSR with Nuxt.js for better performance and SEO.</li>
            <li>Used Vuetify and SCSS for responsive designs.</li>
            <li>Integrated RESTful APIs using Node.js, Express, and MongoDB.</li>
          </ul>
          <a href="https://github.com/ashkansabbaghi/ashStore-frontend" className="text-blue-500 hover:underline">GitHub Front-End</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800">Front-End Developer - Ashitech (Personal Project)</h3>
          <p className="text-gray-600">Sep 2021 - Jan 2022</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Developed comprehensive front-end interfaces using Vue.js.</li>
            <li>Utilized Bootstrap and SCSS for responsive designs.</li>
            <li>Integrated JWT for secure authentication.</li>
          </ul>
          <a href="https://github.com/ashkansabbaghi/frontend_ashitech" className="text-blue-500 hover:underline">GitHub Front-End</a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">React</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Next.js</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Vue.js</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Nuxt.js</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Docker</span>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Bachelor s Degree - Mechanical Engineering</h3>
          <p className="text-gray-600">Azad University, Karaj - 2013 to 2018</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
