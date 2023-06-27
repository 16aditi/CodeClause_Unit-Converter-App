import React, { useState } from "react";
import { Grid, Select, MenuItem, TextField} from "@mui/material";
import convert from "convert-units";


const TabComponent = ({tabName}) => {
  const availableUnits = convert().possibilities(tabName);
  const [inputValue, setInputValue] = useState(0);
  const [inputUnit, setInputUnit] = useState(availableUnits[0]);
  const [outputUnit, setOutputUnit] = useState(availableUnits[1]);
  const [outputValue, setOutputValue] = useState(0);
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    convertUnit(event.target.value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
    convertUnit(inputValue, event.target.value, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
    convertUnit(inputValue, inputUnit, event.target.value);
  };

  const convertUnit = (input, inputUnit, outputUnit) => {
    const convertedValue = convert(input).from(inputUnit).to(outputUnit);
    setOutputValue(convertedValue.toFixed(5));
    const inputUnitName = convert().describe(inputUnit).singular;
    const outputUnitName = convert().describe(outputUnit).singular;
    setResult(`${input} ${inputUnitName} = ${convertedValue.toFixed(5)} ${outputUnitName}`);
  };

  if (tabName === "mass"){
    tabName = "weight"
  }
  return (
    <>
      <h2 style={{ color: "white", textTransform: "uppercase" }}>
        <i>{tabName} CONVERTER</i>
      </h2>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{
          width: 500,
          padding: "20px",
          marginTop: "100px",
          marginLeft: "500px",
          backgroundColor: "white",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            style={{ marginBottom: "10px", color: "white" }}
            label="FROM"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            style={{ marginBottom: "10px" }}
            value={inputUnit}
            onChange={handleInputUnitChange}
          >
            {availableUnits.map((unit) => (
              <MenuItem key={unit} value={unit} disabled={unit === outputUnit}>
                {convert().describe(unit).singular}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            style={{ marginBottom: "10px", color: "black" }}
            label="TO"
            value={outputValue}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            style={{ marginBottom: "10px" }}
            value={outputUnit}
            onChange={handleOutputUnitChange}
          >
            {availableUnits.map((unit) => (
              <MenuItem key={unit} value={unit} disabled={unit === inputUnit}>
                {convert().describe(unit).singular}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <div style={{ color: "white", textAlign: "center" }}>
        <h2>RESULT</h2>
        <h2>
          <i>{result}</i>
        </h2>
      </div>
    </>
  );
};

export default TabComponent;
