import { useEffect } from 'react'
import { useFetcher } from 'react-router-dom'

import classes from './NewsletterSignup.module.css'

function NewsletterSignup() {
  const fetcher = useFetcher()
  const { data, state } = fetcher

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message)
    }
  }, [data, state])

  // Fetcher should basically be used whenever you wanna trigger, an action, or also a loader
  // with help of the load function without actually navigating to the page to which the loader belongs
  // or the page to which the action belongs.
  // so useFetcher is the tool you should use if you wanna trigger a loader or an action
  // without actually loading the page, the route to which this action or loader belongs.
  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
      <button>Sign up</button>
    </fetcher.Form>
  )
}

export default NewsletterSignup
