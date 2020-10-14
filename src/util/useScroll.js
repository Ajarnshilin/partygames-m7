import { useEffect, useState } from 'react'

function useScroll ({ scrollRange = 20 }) {
  const [isScroll, setScroll] = useState(false)

  function handleScrollEvent () {
    if (window.scrollY > scrollRange) {
      return setScroll(true)
    }

    return setScroll(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent)

    return () => document.removeEventListener('scroll', handleScrollEvent)
  }, [])
  return isScroll
}

export default useScroll