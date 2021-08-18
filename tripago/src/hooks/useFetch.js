import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)

      const res = await fetch(url)
      const data = await res.json()

      setIsPending(false)
      setData(data)
    }

    fetchData()
  }, [url])

  return { data, isPending }
}