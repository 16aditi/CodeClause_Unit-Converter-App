import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TabComponent from "./TabComponent";

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "black",
    color: "white"
  },
  indicator: {
    backgroundColor: "white",
    color:"white"
  },
  tabLabel: {
    color: "white",
  },
}));

const UnitTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ root: classes.root, indicator: classes.indicator }}
      >
        <Tab
          classes={{ root: classes.tabLabel }}
          label="LENGTH"
          style={{ color: "white" }}
        />
        <Tab
          classes={{ root: classes.tabLabel }}
          label="TEMPERATURE"
          style={{ color: "white" }}
        />
        <Tab
          classes={{ root: classes.tabLabel }}
          label="AREA"
          style={{ color: "white" }}
        />
        <Tab
          classes={{ root: classes.tabLabel }}
          label="VOLUME"
          style={{ color: "white" }}
        />
        <Tab
          classes={{ root: classes.tabLabel }}
          label="WEIGHT"
          style={{ color: "white" }}
        />
        <Tab
          classes={{ root: classes.tabLabel }}
          label="TIME"
          style={{ color: "white" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabComponent tabName="length" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabComponent tabName="temperature" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabComponent tabName="area" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabComponent tabName="volume" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TabComponent tabName="mass" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TabComponent tabName="time" />
      </TabPanel>
    </div>
  );
};

export default UnitTab;
