import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

/**
 * The homepage of the application.
 *
 * It contains a header with a title, a call-to-action, and a footer with a
 * copyright notice and a link to the developer's website.
 *
 * It also contains a collapsible section with instructions on how to integrate
 * the broker feed and AI assistant.
 *
 * The application is built using Next.js, and it uses the geist-ui CSS framework
 * for styling.
 */
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-12 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center max-w-4xl mx-auto">
        <header className="flex flex-col gap-4 my-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            Recruiting Without Limits.
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-600">
            Speed and Scale.
          </p>
          <p className="text-base md:text-lg text-gray-900">
            We’re building a new model for recruitment—combining revenue
            sharing, a marketing engine, a competitive broker community, and an
            AI‑driven learning platform. This is recruitment rewritten for the
            modern era.
          </p>
        </header>
        <section className="my-6 w-full">
          <Collapsible className="flex w-full flex-col items-start gap-2">
            <CollapsibleTrigger>
              <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-700 hover:underline cursor-pointer">
                Integration notes{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </h2>
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-gray-100 p-4 rounded-md">
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <strong>Broker feed:</strong> Replace this shell with a
                  progressively‑enhanced list bound to
                  <code className="bg-gray-200 rounded px-[0.3rem] py-[0.2rem] font-mono">
                    /api/brokers
                  </code>{" "}
                  or a static{" "}
                  <code className="bg-gray-200 rounded px-[0.3rem] py-[0.2rem] font-mono">
                    brokers.json
                  </code>
                  . Use ISR or a CDN edge cache for freshness.
                </li>
                <li>
                  <strong>AI assistant:</strong> Add a lazy‑loaded chat launcher
                  that calls a serverless endpoint (e.g.,
                  <code className="bg-gray-200 rounded px-[0.3rem] py-[0.2rem] font-mono">
                    /api/assist
                  </code>{" "}
                  ) backed by an LLM + retrieval over broker profiles &amp;
                  jobs. Hydrate only on demand.
                </li>
                <li>
                  <strong>Styling:</strong> This shell uses the{" "}
                  <a
                    className="text-blue-500 hover:text-blue-600 duration-500"
                    href="https://geist-ui.dev/"
                    target="_blank"
                    rel="noopener noreferrer">
                    geist-ui <span aria-hidden="true">↗</span>
                  </a>{" "}
                  CSS framework. Feel free to replace it with your preferred
                  styling solution.
                </li>
                <li>
                  <strong>Deployment:</strong> The easiest way to deploy your
                  Next.js app is to use the{" "}
                  <a
                    className="text-blue-500 hover:text-blue-600 duration-500"
                    href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme"
                    target="_blank"
                    rel="noopener noreferrer">
                    Vercel Platform <span aria-hidden="true">↗</span>
                  </a>{" "}
                  from the creators of Next.js.
                </li>
                <li>
                  <strong>Source code:</strong> You can find the source code for
                  this app on{" "}
                  <a
                    className="text-blue-500 hover:text-blue-600 duration-500"
                    href="https://github.com/payamdowlatyari/recruiting-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  .
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </section>
      </main>
      <footer className="row-start-3 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Recruiting Without Limits. &copy; {new Date().getFullYear()}.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-2">Developed by</span>
          <a
            className="text-blue-500 hover:text-blue-600 duration-500"
            href="https://www.payamd.com/"
            target="_blank"
            rel="noopener noreferrer">
            payamd.com <span aria-hidden="true">↗</span>
          </a>
        </p>
      </footer>
    </div>
  );
}
