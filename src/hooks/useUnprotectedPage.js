import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToFeed, goToProfile } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      goToProfile(history)
    }
  }, [history])
}

export default useUnprotectedPage
