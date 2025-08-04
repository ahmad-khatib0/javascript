import React, { useContext, useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import { useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import QtyButton from "../product-list/QtyButton"
import SubscriptionIcon from "../ui/subscription"
import SelectFrequency from "../ui/select-frequency"

import { CartContext } from "../../contexts"
import { removeFromCart, changeFrequency } from "../../contexts/actions"

import FavoriteIcon from "../ui/favorite"
import DeleteIcon from "../../images/Delete"

const useStyles = makeStyles(theme => ({
  productImage: {
    height: "10rem",
    width: "10rem",
  },
  name: {
    color: theme.palette.secondary.main,
  },
  id: {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  actionWrapper: {
    height: "3rem",
    width: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
  },
  infoContainer: {
    position: "relative",
    height: ({ subscription }) => (subscription ? "10rem" : "8rem"),
    marginLeft: "1rem",
    width: "35rem",
  },
  chipWrapper: {
    position: "absolute",
    top: ({ subscription }) => (subscription ? "4.5rem" : "3.5rem"),
  },
  itemContainer: {
    margin: "2.5rem 0 2rem 2rem ",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 0",
    },
  },
  actionButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "12px 6px",
    },
  },
  chipRoot: {
    marginLeft: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  chipLabel: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  actionContainer: {
    marginBottom: "-0.5rem",
  },
  favoriteIcon: {
    marginTop: 2,
  },
}))

export default function Item({ item }) {
  const classes = useStyles({ subscription: item.subscription })
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))
  const theme = useTheme()
  const [frequency, setFrequency] = useState(item.subscription || "Month")
  // if there is a subscription it will start with it , otherwise it will be undefined
  //or month to fix the disappearing of the subscription chip on adding new variant to cart
  const { dispatchCart } = useContext(CartContext)

  const handleDelete = () => {
    dispatchCart(removeFromCart(item.variant, item.qty))
    // it will remove as the number of items currently in , so the result will be zero, so
    // if the result 0 , than this variant will disappear
  }

  const handleFrequency = newFrequency => {
    dispatchCart(changeFrequency(item.variant, newFrequency))
    setFrequency(newFrequency)
  }

  const actions = [
    {
      component: FavoriteIcon,
      props: {
        color: theme.palette.secondary.main,
        size: matchesXS ? 2 : 3,
        buttonClass: clsx(classes.actionButton, classes.favoriteIcon),
        variant: item.variant.id,
      },
    },
    {
      component: SubscriptionIcon,
      props: {
        color: theme.palette.secondary.main,
        isCart: item,
        size: matchesXS ? 2 : 3,
        cartFrequency: frequency,
      },
    },
    {
      icon: DeleteIcon,
      color: theme.palette.error.main,
      size: matchesXS ? "1.75rem" : "2.5rem",
      onClick: handleDelete,
    },
  ]

  return (
    <Grid item container classes={{ root: classes.itemContainer }}>
      <Grid item>
        <img
          className={classes.productImage}
          src={process.env.GATSBY_STRAPI_URL + item.variant.images[0].url}
          alt={item.variant.id}
        />
      </Grid>
      <Grid
        item
        container
        direction={matchesXS ? "row" : "column"}
        justify="space-between"
        classes={{ root: classes.infoContainer }}
      >
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="h5" classes={{ root: classes.name }}>
              {item.name}
            </Typography>
          </Grid>
          <Grid item>
            <QtyButton
              name={item.name}
              selectedVariant={0}
              variants={[item.variant]}
              // So if we pass our item variants in an array like this, then it seems like it is the
              //  list of variants, but it just happens to only have one item. And that way when we say
              //  our selected variant is zero, it will just use that one item in the first position.
              stock={[{ qty: item.stock }]}
              // reference the 290. Display Cart Items Part 2 lecture
              isCart
              white
              hideCartButton
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          classes={{ root: classes.chipWrapper }}
        >
          <Grid item>
            <Chip label={`$${item.variant.price}`} />
          </Grid>

          {item.subscription ? (
            <Grid item>
              <SelectFrequency
                chip={
                  <Chip
                    label={`Every ${frequency}`}
                    classes={{
                      root: classes.chipRoot,
                      label: classes.chipLabel,
                    }}
                  />
                }
                value={frequency}
                setValue={handleFrequency}
              />
            </Grid>
          ) : null}
        </Grid>
        <Grid item container justify="space-between" alignItems="flex-end">
          <Grid item sm xs={7}>
            <Typography variant="body1" classes={{ root: classes.id }}>
              ID: {item.variant.id}
            </Typography>
          </Grid>
          <Grid
            item
            container
            sm
            xs={5}
            justify="flex-end"
            classes={{ root: classes.actionContainer }}
          >
            {actions.map((action, i) => (
              <Grid item key={i}>
                {action.component ? (
                  <action.component {...action.props} />
                ) : (
                  /// ...action.props add whatever inside the props regardless on the component
                  <IconButton
                    disableRipple
                    onClick={() => action.onClick()}
                    classes={{ root: classes.actionButton }}
                  >
                    <span
                      className={classes.actionWrapper}
                      style={{ height: action.size, width: action.size }}
                    >
                      <action.icon color={action.color} />
                    </span>
                  </IconButton>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
