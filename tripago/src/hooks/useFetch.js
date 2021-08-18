import { useState, useEffect, useRef } from "react"

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  
  // use useRef to wrap an object/array argument
  // which is a useEffect dependency 
  const options = useRef(_options).current

  useEffect(() => {
    console.log(options)
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)
      
      try {
        const res = await fetch(url, { signal: controller.signal })
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

    return () => {
      controller.abort()
    }

  }, [url, options])

  return { data, isPending, error }
}
