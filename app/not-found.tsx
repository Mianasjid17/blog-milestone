import Link from "next/link"

export default function not_found() {
  return (
    <div className="text-center mt-16 ">
      <h1 className="text-8xl font-semibold p-5">404</h1>
      <h2 className="text-6xl font-semibold p-5">Not Found 😒</h2>
      <p className="text-gray-500 text-xl">Could not find requested resource</p>
      <Link href='/' className="text-blue-700 text-lg hover:underline">Return Home (ʘ ͜ʖ ʘ)</Link>
    </div>
  )
}
