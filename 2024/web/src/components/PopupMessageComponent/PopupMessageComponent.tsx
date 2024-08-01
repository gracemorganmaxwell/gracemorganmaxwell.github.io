import React from 'react'

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative rounded-lg bg-white p-8">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full bg-gray-200 p-1 text-gray-600 transition duration-200 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 h-12 w-12 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mb-4 text-lg font-semibold text-gray-800">{message}</p>
          <button
            onClick={onClose}
            className="rounded-lg bg-darkBlue px-6 py-2 text-lg font-semibold text-white transition duration-200 hover:bg-opacity-80 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupMessage
