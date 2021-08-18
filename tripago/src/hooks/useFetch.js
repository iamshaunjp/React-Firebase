import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      const res = await fetch(url, fetchOptions)
      const data = await res.json()

      setData(data)
    }

    fetchData()
  }, [url])

  return { data }
}