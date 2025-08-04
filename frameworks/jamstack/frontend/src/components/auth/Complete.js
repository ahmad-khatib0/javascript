import React, { useEffect, useState } from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { setUser } from "../../contexts/actions"

import checkmark from "../../images/checkmark-outline.svg"
import forward from "../../images/forward-outline.svg"

const useStyles = makeStyles(theme => ({
  iconText: {
    marginTop: "10rem",
  },

  text: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textTransform: "none",
  },

  shop: {
    marginLeft: "1rem",
  },
  shopContainer: {
    marginRight: "1rem",
    marginBottom: "1rem",
  },
}))

export default function Complete({ dispatchUser, user }) {
  const classes = useStyles()

  useEffect(() => {
    // cleanup function --- this only executes on component unmount
    return () => {
      dispatchUser(setUser({ ...user, onboarding: true }))
      // now if at the moment that you will go to another page , onboarding true  will be passed
      // to the account.js when we check if user.jwt && user.onboarding === true , so the complete page
      // will  appear correctly
    }
  }, [])
  return (
    <>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.iconText }}
      >
        <Grid item>
          <img src={checkmark} alt="sign up finished" />
        </Grid>

        <Grid item>
          <Typography variant="h3" classes={{ root: classes.text }}>
            Account Created!
          </Typography>
        </Grid>
      </Grid>

      <Grid item container justify="flex-end">
        <Grid item classes={{ root: classes.shopContainer }}>
          <Button>
            <Typography variant="h3" classes={{ root: classes.text }}>
              Shop
            </Typography>
            <img src={forward} className={classes.shop} alt="Browse Products" />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
