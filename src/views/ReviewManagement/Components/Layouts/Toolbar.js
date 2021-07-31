import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Select from "components/form/select/simpleSelect";
import MultiSelect from "components/form/select/MultiSelect";
import DateRange from "components/form/Date/SimpleDateRangePicker";
import * as constant from "../../constant";
import { ContainedButton, SuccessButton, TextButton } from "components/button";
import SimpleModal from "components/Modal/simpleModal";
import Radio from "components/form/RadioButton/SimpleRadio";
import TodayIcon from "@material-ui/icons/Today";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    alignItems: "center",
    height: 65,
    flexGrow: 1,
  },
  filterTitle: {
    fontSize: 11,
    fontWeight: "Bold",
  },
  filterChild: {
    fontSize: 11,
    fontWeight: "500",
  },
}));
export default function Toolbar({
  selectedValues,
  siteFilter,
  selectedDateRange,
  GroupByData,
  startDate,
  endDate,
  Advancefilters,
  preSelectedSite,
  GroupBySelection,
  handleResetFilter,
  selectedProperties,
  tab,
  benchmarkFilter,
}) {
  const classes = useStyles();
  const [openDateModal, setOpenDateModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [date, setDate] = useState(null);
  const [propertiesSelected, setPropertiesSelected] = useState([]);
  const [sitesSelected, setSitesSelected] = useState(preSelectedSite);
  const [Group_By, setGroupBy] = useState("MONTH");
  const [lavelSelected, setLavelSelected] = useState(null);
  const handleDateSelector = (item) => {
    setDate(item);
  };

  const handleFilterApply = () => {
    if (date) {
      selectedDateRange(date);
    }
    if (sitesSelected) {
      selectedValues(sitesSelected);
    }
    if (propertiesSelected.length > 0) {
      selectedProperties(propertiesSelected);
    }
    GroupBySelection(Group_By);
  };
  const handleReset = () => {
    handleResetFilter();
    setSitesSelected(null);
    setDate(null);
    GroupBySelection("MONTH");
  };
  console.log(tab);

  useEffect(() => {
    if (startDate || endDate) {
      const data = {
        selection: {
          startDate: new window.Date(startDate), // new Date(),
          endDate: new window.Date(endDate), //   new Date(),
          key: "selection",
        },
      };
      setDate(data);
    }
  }, []);

  return (
    <Grid
      spacing={2}
      container
      style={{ marginBottom: 10, paddingLeft: 10, paddingRight: 10 }}
      className={classes.root}
    >
      <SimpleModal
        isOpen={openDateModal}
        handleClose={() => setOpenDateModal(false)}
      >
        <DateRange
          selectedDateRange={(item) => handleDateSelector(item)}
          selectedDate={date}
        />
      </SimpleModal>
      <Grid item container direction="row" alignItems="center" xs={3}>
        <Box className={classes.filterTitle}>Select Date : </Box>
        <Box
          onClick={() => setOpenDateModal(true)}
          bgcolor="grey"
          borderRadius={6}
          ml={1}
          p={0.3}
        >
          {date ? (
            <Box
              className={classes.filterChild}
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              {(date?.selection?.startDate).toString().slice(4, 15)} -
              {(date?.selection?.endDate).toString().slice(4, 15)}
              <Box ml={1}>
                <TodayIcon fontSize="small" color="primary" />
              </Box>
            </Box>
          ) : (
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box fontSize={11} mr={1}>
                DD/MM/YYYY
              </Box>
              <TodayIcon fontSize="small" color="primary" />{" "}
            </Box>
          )}
        </Box>
      </Grid>
      {tab == "snapshot" && (
        <Grid item container direction="row" alignItems="center" xs>
          <Box className={classes.filterTitle}>Review Sites : </Box>
          <MultiSelect
            options={siteFilter}
            // options={constant.SiteOptions}
            selectedValues={(data) => {
              setSitesSelected(data);
            }}
            placeHolder="Select Site"
            preSelected={sitesSelected}
          />
        </Grid>
      )}

      <Grid
        xs={2}
        item
        alignItems="center"
        container
        direction="row"
        justify="flex-start"
      >
        <TextButton
          label="Filter Properties"
          onClick={() => setFilterModal(true)}
          className={classes.filterTitle}
        />
      </Grid>
      <SimpleModal
        isOpen={filterModal}
        handleClose={() => setFilterModal(false)}
        height="200"
      ></SimpleModal>
      <Grid xs item>
        <Box className={classes.filterTitle}>Group By</Box>
        <Grid xs={12} item container direction="row">
          {GroupByData?.map((item) => (
            <Grid xs={4}>
              <Radio
                label={item.value}
                isChecked={Group_By == item.id}
                value={item.id}
                handleChange={(data) => {
                  console.log(Group_By);
                  setGroupBy(item.id);
                }}
                additionalStyles={{}}
                labelStyles={{
                  fontSize: 10,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1} container justify="flex-end">
        {/* <SuccessButton label="Apply" onClick={handleFilterApply} /> */}
        <Tooltip title="Apply Filter">
          <CheckCircleOutlineIcon
            fontSize="small"
            onClick={handleFilterApply}
            style={{ color: "green", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="Reset Filter">
          <RotateLeftIcon
            onClick={handleReset}
            fontSize="small"
            style={{ color: "red", marginRight: 2, cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="Download Data">
          <SystemUpdateAltIcon
            fontSize="small"
            color="primary"
            style={{ marginRight: 2, cursor: "pointer" }}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
}
