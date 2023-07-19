import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const data = await resp.json()
        setData(data)
        setCountries(data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    
    fetchData()
  }, [])
  return { isLoading, isError,data, countries, setCountries }
}
export default useFetch