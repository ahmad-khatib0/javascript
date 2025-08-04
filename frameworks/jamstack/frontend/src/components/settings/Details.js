import React, { useState, useEffect, useRef } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { useMediaQuery, FormControlLabel, Switch } from "@material-ui/core"
import Fields from "../auth/Fields"
import Slots from "./Slots"
import { EmailPassword } from "../auth/Login"

import fingerprint from "../../images/fingerprint.svg"
import NameAdornment from "../../images/NameAdornment"
import PhoneAdornment from "../../images/PhoneAdornment"

const useStyles = makeStyles(theme => ({
  phoneAdornment: {
    height: 25.122,
    width: 25.173,
  },
  visibleIcon: {
    padding: 0,
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  icon: {
    marginTop: ({ checkout }) => (checkout ? "-2rem" : undefined),
    marginBottom: ({ checkout }) => (checkout ? "1rem" : "3rem"),
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  fieldContainer: {
    marginBottom: "2rem",
    "& > :not(:first-child)": {
      marginLeft: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
      "& > :not(:first-child)": {
        marginLeft: 0,
        marginTop: "1rem",
      },
    },
  },
  slotContainer: {
    position: "absolute",
    bottom: ({ checkout }) => (checkout ? -8 : 0),
  },
  detailsContainer: {
    height: "100%",
    display: ({ checkout, selectedStep, stepNumber }) =>
      checkout && selectedStep !== stepNumber ? "none" : "flex",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      borderBottom: "4px solid #fff",
      height: ({ checkout }) => (!checkout ? "30rem" : "100%"),
    },
  },
  fieldContainerCart: {
    "& > *": {
      marginBottom: "1rem",
    },
  },
  switchWrapper: {
    marginRight: 4,
  },

  switchLabel: {
    fontWeight: 600,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #fff",
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

export default function Details({
  user,
  edit,
  setChangesMade,
  values,
  setValues,
  slot,
  setSlot,
  errors,
  setErrors,
  billing,
  setBilling,
  checkout,
  billingValues,
  setBillingValues,
  selectedStep,
  stepNumber,
  noSlots,
}) {
  const classes = useStyles({ checkout, selectedStep, stepNumber })
  const isMounted = useRef(false)

  const [visible, setVisible] = useState(false)
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  useEffect(() => {
    if (noSlots || user.username === "Guest") return
    // solve error for guest requests cartPage : user.contactInfo is undefined

    if (checkout) {
      setValues(user.contactInfo[slot])
    } else {
      setValues({ ...user.contactInfo[slot], password: "********" })
    }
  }, [slot])

  useEffect(() => {
    if (checkout) return

    const changed = Object.keys(user.contactInfo[slot]).some(
      field => values[field] !== user.contactInfo[slot][field]
    )

    setChangesMade(changed)
  }, [values])

  useEffect(() => {
    if (noSlots) {
      isMounted.current = false
      // to prevent coping over the empty fields if we go backward
      return
    }

    if (isMounted.current === false) {
      isMounted.current = true
      return
    }
    // at first refresh useRef will be false and here we flip it to be true and return , so in the
    // second time the above if will not run so it will go down and execute the the rest of useEffect
    // so in this way coping over empty values for the fields on first run because the main issue here
    // is that setDetailForBilling and setLocationForBilling defaulted to false ,so in the previous
    // if we just do if (billing === false) it will copy over the empty values for the fields
    if (billing === false && isMounted.current) {
      // that means we've just flipped the switch off
      setValues(billingValues)
      // copy over any billingValues that we've to the regular billingValues.so it will preserve it
    } else {
      setBillingValues(values)
      // And if we're flipping the switch on, then let's set the billing values
      // to the previous regular values
    }
  }, [billing])

  const email_password = EmailPassword(false, false, visible, setVisible, true)
  const name_phone = {
    name: {
      helperText: "you must enter a name",
      placeholder: "Name",
      startAdornment: <NameAdornment color="#fff" />,
    },
    phone: {
      helperText: "invalid phone number",
      placeholder: "Phone",
      startAdornment: (
        <div className={classes.phoneAdornment}>
          <PhoneAdornment />
        </div>
      ),
    },
  }

  let fields = [name_phone, email_password]

  if (checkout) {
    fields = [
      {
        name: name_phone.name,
        email: email_password.email,
        phone: name_phone.phone,
      },
    ]
  }

  const handleValues = values => {
    if (billing === slot && !noSlots) {
      setBillingValues(values)
    }
    setValues(values)
  }

  return (
    <Grid
      item
      container
      direction="column"
      lg={checkout ? 12 : 6}
      xs={12}
      alignItems="center"
      justify="center"
      classes={{ root: classes.detailsContainer }}
    >
      <Grid item>
        <img
          src={fingerprint}
          alt="details settings"
          className={classes.icon}
        />
      </Grid>
      {fields.map((pair, i) => (
        <Grid
          container
          justify="center"
          alignItems={matchesXS || checkout ? "center" : undefined}
          key={i}
          classes={{
            root: clsx({
              [classes.fieldContainerCart]: checkout,
              [classes.fieldContainer]: !checkout,
            }),
          }}
          direction={matchesXS || checkout ? "column" : "row"}
        >
          <Fields
            fields={pair}
            // values={billing === slot ? billingValues : values}
            values={billing === slot && !noSlots ? billingValues : values}
            // So if billing is equal to slot, well, if we're not passing either of them,(to the
            // Billing Info page ) they're both undefined And so then it's expecting the billing values
            // and we're not passing those either. So that is undefined and it cannot read property name
            //  of undefined.
            setValues={handleValues}
            // So if the slot marked for billing is the current slot that we're on, then let's
            // go ahead and  use billing values. Otherwise, we'll just use the regular values,
            errors={errors}
            setErrors={setErrors}
            isWhite
            disabled={checkout ? false : !edit}
            settings={!checkout}
            // we want to pass this prop if we are not on the checkout screen
          />
        </Grid>
      ))}

      {noSlots ? null : (
        <Grid
          item
          container
          justify={checkout ? "space-between" : undefined}
          classes={{ root: classes.slotContainer }}
        >
          <Slots slot={slot} setSlot={setSlot} checkout={checkout} />
          {checkout && (
            <Grid item>
              <FormControlLabel
                classes={{
                  root: classes.switchWrapper,
                  label: classes.switchLabel,
                }}
                label="Billing"
                labelPlacement="start"
                control={
                  <Switch
                    checked={billing === slot}
                    onChange={() => setBilling(billing === slot ? false : slot)}
                    // by doing so , now we can to have on switch selected at once
                    color="secondary"
                  />
                }
              />
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  )
}
