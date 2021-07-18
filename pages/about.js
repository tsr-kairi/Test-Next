import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold text-red-600">
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h1>
      <h1 className="text-4xl text-indigo-700">Hello World</h1>

      <div className="p-3  flex items-center justify-center flex-col gap-8">
        <h2 className="text-center text-6xl">{count}</h2>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setCount(count + 1)}
            className="py-2 px-4 bg-indigo-600 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="py-2 px-4 bg-red-600 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
