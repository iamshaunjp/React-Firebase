import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        setIsPending(false)
        setError('Could not fetch the data')
        console.log(err.message)
      }
    }

    fetchData()

    // cleanup function
    return () => {
      console.log('cleanup function ran')
    }

  }, [url])

  return { data, isPending, error }
}