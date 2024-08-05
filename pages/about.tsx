/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function About() {
  const DESCRIPTION: string[] = [
    "Yahalo! My name is Peter 👋, and I'm currently living in the Bay Area. Originally from Vietnam, when I was 18, my parents told me that I had 2 options: enter a university in Vietnam or study abroad in Germany where my aunt live. So, as a good son, I did completely opposite. I packed my luggages of clothes infused with my American dream & 18-years-old naivete to the United States.",
    "So far, the road has been more bumpy than smooth, but I learned a lot along the way, and made great friends who I'm forever grateful for. I've grown tremendously as a software engineer, and before now, I worked at Mozilla, be a Major League Hacking fellow, interned at ServiceNow, and worked at Dorm Room Fund as the head of engineering.",
  ]
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">About Me.</h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p className="leading-loose text-2xl md:text-4xl font-semibold  mx-4" style={{ lineHeight: '3rem' }}>
            I am a software engineer who constantly get fascinated by people, the startup culture, and new running trails.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
              <div className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot me an email at{' '}
                <a
                  href={`mailto:peternguyenforwork@gmail.com`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  peternguyenforwork[at]gmail[dot]com
                </a>{' '}
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Job Opportunities</h1>
              <div className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I&apos;m open for job opportunities (internship/part-time/full-time). If you&apos;re interested, check my{' '}
                <a
                  href={
                    'https://www.dropbox.com/scl/fi/282glbr2rf63xhg1ducvd/Peter_Nguyen_resume.pdf?rlkey=3nqjx8fm96c1hj00gqwjzo40a&st=f1rjmpfg&dl=0'
                  }
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume
                </a>{' '}
                and I&apos;d love to chat with you.
              </div>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">Social Links</h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a href="https://twitter.com/petercrackstuff" className="flex flex-row items-center space-x-4 group">
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a href="https://github.com/petercrackthecode" className="flex flex-row items-center space-x-4 group">
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a href="https://linkedin.com/in/petercrackthecode" className="flex flex-row items-center space-x-4 group">
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {DESCRIPTION.map((desc, idx) => (
              <div key={idx} className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                {desc}
              </div>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Tech Stack</h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
