import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "components/form/RadioButton/SimpleRadio";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    marginTop: 10,
    marginBottom: 10,
    // boxShadow: 10,
    marginLeft: 5,
    "& div.MuiPaper-root .MuiAccordion-root .MuiPaper-elevation1": {
      boxShadow: 0,
    },

    "& div.MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: "capitalize",
  },
  Accordion: {
    borderRadius: 0,
    "& div.MuiPaper-root .MuiAccordion-root .makeStyles-Accordion-122 .MuiPaper-elevation1":
      {
        boxShadow: 0,
      },
  },
}));

export default function SimpleAccordion(props) {
  // const [HeaderSelected, setHeaderSelected] = useState(null);
  const {
    headerLabel,
    children,
    headerSelection,
    headerData,
    headerSelected,
    handleHeaderSelection,
    isChecked
  } = props;
  const classes = useStyles();

  const handleChange = (item) => {
    console.log(item);
    handleHeaderSelection(item);
  };
  return (
    <div className={classes.root}>
      <Accordion className={classes.Accordion} square="true">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container direction="row" alignItems="center">
            {headerSelection && (
              <Grid item>
                <Radio
                  value={headerData?.id}
                  handleChange={() => handleChange(headerData)}
                  isChecked={headerSelected?.some((d) => d.id == headerData.id)}
                />
              </Grid>
            )}

            <Grid item>
              <Typography className={classes.heading}>{headerLabel}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
SimpleAccordion.defaultProps = {
  headerSelection: false,
};
