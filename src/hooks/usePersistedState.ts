import { useEffect, useState, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export const usePersistedState = <T>(
  key: string,
  initialState: T,
): Response<T> => {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const localStorageValue = localStorage.getItem(key)

      if (localStorageValue) {
        return JSON.parse(localStorageValue)
      }
    }
    return initialState
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState]
}
