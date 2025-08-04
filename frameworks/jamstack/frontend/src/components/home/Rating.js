import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import fullStar from "../../images/full-star.svg"
import halfStar from "../../images/half-star.svg"
import emptyStar from "../../images/empty-star.svg"

const useStyles = makeStyles(theme => ({
  size: {
    height: ({ size }) => `${size || 2}rem`,
    width: ({ size }) => `${size || 2}rem`,
  },
}))
export default function Rating({ number, size }) {
  const diff = 5 - Math.ceil(number) //this to determine how many empty stars we need
  //  5 - 3.5  => ceil 5 - 4 = 1 , so after rounding it up it will determine that we need on empty star
  const classes = useStyles({ size })
  return (
    <>
      {[...Array(Math.floor(number))].map((e, i) => (
        <img src={fullStar} alt="full star" key={i} className={classes.size} />
      ))}
      {number % 1 !== 0 ? (
        <img src={halfStar} alt="half star" className={classes.size} />
      ) : null}
      {/* 3 % 1 = 0  but 3.5 % 1 = 0.5  ....so it will return a half star  */}
      {[...Array(diff)].map((element, index) => (
        <img
          src={emptyStar}
          alt="empty star"
          key={`${index}-empty`}
          className={classes.size}
        />
      ))}
    </>
  )
}
