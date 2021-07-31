import { Divider, Grid, Typography, Box, makeStyles } from "@material-ui/core";
import { TextButton } from "components/button";
import React, { useState, useEffect } from "react";
import Radio from "components/form/RadioButton/SimpleRadio";
import * as Constants from "../../constant";
import BasicTree from "components/Tree/BasicTree";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  NumberParam,
  QueryParamProvider,
  useQueryParam,
} from "use-query-params";

import Accordion from "components/Accordion/simpleAccordion";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 500,
    width: 900,
  },
  tabRoot: {
    color: "white",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  contentRoot: {
    marginLeft: 1,
    // width: "100%",
    overflow: "auto",
    maxHeight: 310,
  },
  body: {
    maxHeight: 400,
  },
  active: {
    color: "#0FA9DE",
    borderRight: "2px solid",
    backgroundColor: "#def7ff",
    borderRightColor: "#0FA9DE",
    textTransform: "capitalize",
    fontSize: 14,
    fontWeight: 700,
  },
  notActive: {
    fontSize: 14,
    fontWeight: 400,
    textTransform: "capitalize",
  },
  radioGrid: {
    marginBottom: -25,
  },
  PropertyGrid: {
    marginBottom: -10,
  },
  selectedUser: {
    fontSize: 14,
    fontWeight: 700,
  },
  selectedGrid: {
    marginLeft: 80,
  },
}));
export default function Filters(props) {
  const { data, setSelectedData, selectedData, allowMultiSelect } = props;
  const classes = useStyles();
  const [selectedPropertyData, setSelectedPropertyData] = useState([]);
  const [LevelSelected, setLevelSelected] = useState();
  const [headerSelected, setHeaderSelected] = useState(null);
  const handleSelection = (item) => {
    const data = {
      name: item.name,
      id: item.id,
      type: item.type,
      Level_id: LevelSelected,
      details: item.details,
      user_id: item.user_id,
    };

    if (data.type == "user") {
      if (selectedData.some((item) => item.id === data.id)) {
        const tempD = [...selectedData];
        let index = tempD.findIndex((item) => item.id === data.id);
        tempD.splice(index, 1);
        setSelectedData(tempD);
        return;
      } else {
        const tempD = [];
        selectedData.map((item, index) => {
          if (item.user_id == data.id) {
          } else {
            tempD.push(item);
          }
        });
        tempD.push(data);
        setSelectedData(tempD);
        return;
      }
    }

    if (data.type == "level" || data.type == "portfolio") {
      if (selectedData.some((item) => item.id === data.id)) {
        const tempD = [...selectedData];
        let index = tempD.findIndex((item) => item.id === data.id);
        tempD.splice(index, 1);
        setSelectedData(tempD);
        return;
      } else {
        const tempD = [];
        selectedData.map((item, index) => {
          if (item.Level_id == data.id) {
          } else {
            tempD.push(item);
          }
        });
        tempD.push(data);
        setSelectedData(tempD);
      }
    } else {
      if (selectedData.some((item) => item.id === data.id)) {
        const tempD = [...selectedData];
        let index = tempD.findIndex((item) => item.id === data.id);
        tempD.splice(index, 1);
        setSelectedData(tempD);
      } else {
        if (selectedData.some((item) => item.id === data.Level_id)) {
          console.log("found");
          console.log(selectedData.some((item) => item.user_id === data.id));
          const tempD = [...selectedData];
          let index = tempD.findIndex((item) => item.id === data.Level_id);
          console.log(index);
          tempD.splice(index, 1);
          tempD.push(data);
          setSelectedData(tempD);
        } else if (selectedData.some((item) => item.id === data.user_id)) {
          console.log("found2");
          const tempD = [...selectedData];
          let index = tempD.findIndex((item) => item.id === data.user_Id);
          console.log(index);
          tempD.splice(index, 1);
          tempD.push(data);
          setSelectedData(tempD);
        } else {
          console.log(data);
          console.log(selectedData.some((item) => item.id === data.user_id));
          setSelectedData([...selectedData, data]);
        }
      }
    }
  };
  useEffect(() => {
    setLevelSelected(Constants.Filter.levels[0].id);
    setSelectedPropertyData(Constants.Filter.levels[0].details);
  }, []);
  const InnerItem = ({ inneritem }) => {
    return (
      <Accordion
        headerLabel={inneritem.name}
        headerSelection="true"
        headerData={inneritem}
        headerSelected={selectedData}
        isChecked={true}
        handleHeaderSelection={(item) => handleSelection(item)}
      >
        <Grid item container style={{ marginTop: -15 }}>
          {inneritem.details.map((properties, index) => (
            <>
              <Grid item xs={4} className={classes.PropertyGrid}>
                <Radio
                  label={properties.name}
                  value={properties.id}
                  isChecked={selectedData.some((d) => d.id == properties.id)}
                  handleChange={(e) => {
                    e.stopPropagation();
                    handleSelection(properties);
                  }}
                />
              </Grid>
              {properties?.details && properties?.details?.length > 0 && (
                <InnerItem inneritem={properties} />
              )}
            </>
          ))}
        </Grid>
      </Accordion>
    );
  };

  return (
    <Grid className={classes.root}>
      <Box mb={2}>Filter By Portfolio/Distribution</Box>
      <Box mb={2}>
        <Divider />
      </Box>
      <Grid item xs={12} container direction="row">
        <Grid item xs={3} className={classes.body}>
          {Constants.Filter.levels?.map((item) => (
            <Grid
              container
              alignItems="center"
              direction="row"
              p={1}
              onClick={() => {
                setLevelSelected(item.id);
                setSelectedPropertyData(item.details);
                // handleSelection(item);
              }}
              className={
                LevelSelected === item.id ? classes.active : classes.notActive
              }
            >
              <Grid item>
                <Radio
                  handleChange={() => {
                    // setLevelSelected(item.id);
                    // setSelectedPropertyData(item.details);
                    handleSelection(item);
                  }}
                  isChecked={selectedData.some((obj) => obj.id === item.id)}
                />
              </Grid>
              <Grid item>{item.name}</Grid>
            </Grid>
          ))}
        </Grid>
        {selectedPropertyData && (
          <Grid
            xs={9}
            container
            spacing={1}
            item
            className={classes.contentRoot}
          >
            {selectedPropertyData.map((inneritem, index) =>
              inneritem.details == null ? (
                <Grid item xs={4} className={classes.radioGrid}>
                  <Radio
                    label={inneritem.name}
                    value={inneritem.id}
                    isChecked={selectedData.some((d) => d.id == inneritem.id)}
                    handleChange={() => handleSelection(inneritem)}
                    labelStyles={{
                      fontSize: 10,
                      fontWeight: 400,
                      textTransform: "capitalize",
                    }}
                  />
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <InnerItem inneritem={inneritem} />
                </Grid>
              )
            )}
          </Grid>
        )}
      </Grid>

      <Grid
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 15,
          zIndex: 100,
          backgroundColor: "white",
        }}
      >
        {selectedData.length > 0 && (
          <>
            <Box>
              <Divider />
            </Box>
            <Box mt={1} pl={5} className={classes.selectedUser}>
              {selectedData[0]?.details != null
                ? " Selected User"
                : " Selected Properties"}

              {}
            </Box>
            <Grid container direction="row" className={classes.selectedGrid}>
              {selectedData?.map((items) => (
                <Grid
                  item
                  xs={3}
                  // ml={7}
                  // mt={1}
                  // fontSize={13}
                  className={classes.selectedUser}
                  style={{ textTransform: "capitalize" }}
                >
                  {items?.name}
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}
