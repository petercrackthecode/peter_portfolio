/* eslint-disable @next/next/no-img-element */
import { RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from './RainbowHighlight'

export default function Hero() {
  const headlines = [
    { title: 'Engineer', color: '#F59E0B' },
    { title: 'Runner', color: '#84CC16' },
    { title: 'Coffee Aficionado', color: '#10B981' },
    { title: 'Life-long learner', color: '#3B82F6' },
  ]
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-1/2 mx-auto flex flex-col lg:p-20">
        <RoughNotationGroup show={true}>
          {headlines.map((headline, headline_key) => (
            <RainbowHighlight color={headline.color} key={`${headline.title}_${headline_key}`}>
              <h1 className="text-4xl md:text-7xl font-bold my-2">{headline.title}</h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img src="/portfolio_image.jpg" alt="Peter's photo" className="shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That&apos;s me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
