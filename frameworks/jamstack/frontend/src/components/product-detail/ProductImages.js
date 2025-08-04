import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  selected: {
    height: "40rem",
    width: "40rem",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
      height: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20rem",
      height: "20rem",
    },
  },
  small: {
    height: "5rem ",
    width: "5rem",
    [theme.breakpoints.down("xs")]: {
      width: "3rem",
      height: "3rem",
    },
  },
  imageItem: {
    margin: "1rem",
  },
}))

export default function ProductImages({
  images,
  selectedImage,
  setSelectedImage,
}) {
  const classes = useStyles()

  return (
    <Grid item container direction="column" alignItems="center" lg={6}>
      <Grid item>
        <img
          src={process.env.GATSBY_STRAPI_URL + images[selectedImage].url}
          alt="product_large"
          className={classes.selected}
        />
      </Grid>
      <Grid item container justify="center">
        {images.map((image, i) => (
          <Grid item classes={{ root: classes.imageItem }} key={image.url}>
            <IconButton onClick={() => setSelectedImage(i)}>
              <img
                src={process.env.GATSBY_STRAPI_URL + image.url}
                alt={`product_small${i}`}
                className={classes.small}
              />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
