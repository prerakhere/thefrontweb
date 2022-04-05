import Head from "next/head"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"

function NavItem({ href, text }) {
  return (
    <Link href={href}>
      <a className="font-normal text-gray-600 dark:text-gray-400 sm:inline-block p-1 sm:px-3 sm:py-2 mx-1 hover:text-black dark:hover:text-white transition-all">
        <span className="capsize text-sm md:text-base">{text}</span>
      </a>
    </Link>
  )
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props

  const meta = {
    title: "thefrontweb",
    description: "Articles on frontend and JavaScript",
    type: "website",
    ...customMeta,
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://thefrontweb.vercel.com`} />
        <link rel="canonical" href={`https://thefrontweb.vercel.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="thefrontweb" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="thefrontweb" />
        <meta name="twitter:site" content="@prerakhere" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-9 md:pb-8 text-gray-900 bg-gray-50  dark:bg-gray-800 bg-opacity-60 dark:text-gray-100">
          <div>
            <Link href="/">
              <a>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight text-black dark:text-white">
                  thefrontweb
                </h2>
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <NavItem href="/about" text="About" />
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-8 h-8 md:w-9 md:h-9 rounded-lg sm:inline-block sm:px-2 sm:py-2 mx-1 sm:mx-4 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-200"
                  >
                    <path d="M21.546 11.646 19 9.101V5.5a.5.5 0 0 0-.5-.5h-3.601l-2.546-2.546a.5.5 0 0 0-.707 0L9.101 5H5.5a.5.5 0 0 0-.5.5v3.601l-2.546 2.546a.5.5 0 0 0 0 .707L5 14.899V18.5a.5.5 0 0 0 .5.5h3.601l2.546 2.546a.5.5 0 0 0 .707 0L14.899 19H18.5a.5.5 0 0 0 .5-.5v-3.601l2.546-2.546a.5.5 0 0 0 0-.707zM12 8a4 4 0 0 1 0 8" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </nav>
      </div>
      <main className=" flex justify-center px-8 bg-gray-50 dark:bg-gray-800 mt-2">
        <div className="w-full relative max-w-4xl">{children}</div>
      </main>
    </div>
  )
}
