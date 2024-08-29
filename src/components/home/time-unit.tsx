import React from 'react'

const CountdownTimer: React.FC = () => {

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-10 ml-9 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Event Countdown</h1>
      <div className="flex space-x-4 justify-center text-4xl font-semibold mb-6 sm:text-4xl">
        <div className="flex flex-col items-center">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            00
          </span>
          <span className="text-sm mt-2">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            00
          </span>
          <span className="text-sm mt-2">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            00
          </span>
          <span className="text-sm mt-2">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            00
          </span>
          <span className="text-sm mt-2">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer