'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='text-center p-5 mt-48'>
      <h2 className='text-3xl font-semibold'>Something went wrong! 😫</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='text-xl text-blue-700 hover:underline'
      >
        Try again
      </button>
    </div>
  )
}