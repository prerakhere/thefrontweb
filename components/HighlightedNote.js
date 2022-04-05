export default function HighlightedNote({ content }) {
  return (
    <div className="border rounded-none border-l-4 border-purple-400/90 dark:border-purple-500 bg-purple-200/50 dark:bg-purple-500/20 rounded p-1 pl-3 my-4 w-full">
      <div className="mt-2">
        <div className="flex font-medium items-baseline mb-2">
          <div className="h-4 w-4 mr-4">
            <svg
              className="h-5 w-5 text-purple-900 dark:text-purple-50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 12C15.3333333 12.6666667 15 14 15 16L15 17 9 17 9 16C9 14 8.66666667 12.6666667 8 12 5.6739597 9.6739597 5.41421356 6.10050506 7.75735931 3.75735931 10.1005051 1.41421356 13.8994949 1.41421356 16.2426407 3.75735931 18.5857864 6.10050506 18.4068484 9.59315157 16 12zM10 21L14 21" />{" "}
              </g>
            </svg>
          </div>
          <span className="text-purple-900 dark:text-purple-50">{content}</span>
        </div>
      </div>
    </div>
  )
}
