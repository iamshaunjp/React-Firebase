import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      setIsPending(true)
      
      setTimeout(async () => {
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
      }, 2000)

    } // end of fetchData function
      
    fetchData()

  }, [url])

  return { data, isPending, error }
}