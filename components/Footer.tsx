export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 border-t-2 flex flex-row justify-between">
      <p>© Peter Nguyen. All Rights Reserved.</p>
      <div>
        Developed by{' '}
        <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
          <a
            className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
            href="https://peternguyen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peter Nguyen
          </a>
        </div>
      </div>
      <div className="space-x-4 flex flex-row items-center">
        <a
          href="https://www.dropbox.com/scl/fi/282glbr2rf63xhg1ducvd/Peter_Nguyen_resume.pdf?rlkey=3nqjx8fm96c1hj00gqwjzo40a&st=sq9iik0p&dl=0"
          title="resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="20"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="currentColor"
          >
            <path d="M20 22h-18v-20h20l9 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
          </svg>
        </a>
        <a
          href="mailto:peternguyenforwork@gmail.com"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
          title="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/petercrackstuff"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter h-5 w-5"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/petercrackthecode"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin h-5 w-5"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      </div>
      <span></span>
    </div>
  )
}
