import React, { useState, useEffect, useContext } from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useQuery } from "@apollo/client"
import ProductReview from "./ProductReview"
import { GET_REVIEWS } from "../../apollo/queries"
import { UserContext } from "../../contexts"

import { StyledPagination } from "../../templates/ProductList"

const useStyles = makeStyles(theme => ({
  reviews: {
    padding: "0 3rem",
  },
  pagination: {
    marginBottom: "3rem",
  },
}))

export default function ProductReviews({ product, edit, setEdit }) {
  const classes = useStyles()
  const { user } = useContext(UserContext)
  const [reviews, setReviews] = useState([])
  const [page, setPage] = useState(1)

  const { data } = useQuery(GET_REVIEWS, { variables: { id: product } })

  useEffect(() => {
    if (data) {
      setReviews(data.product.reviews)
    }
  }, [data])

  const reviewsPerPage = 15
  const numPages = Math.ceil(reviews.length / reviewsPerPage)

  return (
    <Grid
      id="reviews"
      item
      container
      direction="column"
      classes={{ root: classes.reviews }}
    >
      {edit && (
        <ProductReview
          product={product}
          setEdit={setEdit}
          setReviews={setReviews}
          reviews={reviews}
          user={user}
        />
      )}
      {reviews
        .filter(review =>
          edit ? review.user.username !== user.username : review
        )

        .slice((page - 1) * reviewsPerPage, page * reviewsPerPage)
        //       1   - 1    *   15       =0 ,     1 *  15   =15   //from 0 to 15 , so 15 product
        //       2   - 1    *   15       =15 ,     2 *  15  =30   //from 15 to 30, so another 15 product
        /* slice and this is where we'll make sure that we're only displaying the reviews
           from the page we're currently on. */

        .map(review => (
          <ProductReview
            key={review.id}
            product={product}
            review={review}
            reviews={reviews}
          />
        ))}

      <Grid item container justify="flex-end">
        <Grid item>
          <StyledPagination
            count={numPages}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
            color="primary"
            classes={{ root: classes.pagination }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
