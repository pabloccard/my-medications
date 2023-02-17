import { useEffect, useState, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export const usePersistedState = <T>(
  key: string,
  initialState: T,
): Response<T> => {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key)

    if (localStorageValue) {
      return JSON.parse(localStorageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
