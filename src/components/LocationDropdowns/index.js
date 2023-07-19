import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, useMediaQuery } from "@mui/material";

const LocationDropdowns = ({
  handleCityChange,
  handleStateChange,
  selectedState,
  selectedCity,
}) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const responsiveMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    // Fetch states from API
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch cities based on selected state from API
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const fetchStates = async () => {
    try {
      // Make a POST request to fetch states
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: "India",
          }),
        }
      );
      const data = await response.json();
      setStates(data.data.states);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (selectedState) => {
    try {
      // Make a POST request to fetch cities based on the selected state
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: "India",
            state: selectedState,
          }),
        }
      );
      const data = await response.json();
      setCities(data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  console.log("city", selectedCity);
  return (
    <div>
      <FormControl
        sx={{ minWidth: 240 }}
        className={!responsiveMobile ? "me-4" : ""}
        style={responsiveMobile ? { paddingBottom: "10px" } : null}
      >
        <InputLabel
          sx={{
            fontSize: "large",
          }}
        >
          State
        </InputLabel>

        <Select
          value={selectedState}
          onChange={(e) => {
            handleStateChange(e.target.value);
          }}
          native
          defaultValue=""
          id="grouped-native-select"
          sx={{
            height: responsiveMobile ? null : "3.5rem",
            border: "0.0625rem solid #1a1a1a1f",
            "&:hover": { border: "0.0625rem solid #1a1a1a1f" },
            "& .MuiSelect-root": {
              border: "0.0625rem solid #1a1a1a1f",
            },
          }}
        >
          <option disabled></option>
          {states && states ? (
            states?.map((state) => (
              <>
                <option
                  key={state?.id}
                  value={state?._id}
                  style={{ color: "#2b2a29", cursor: "pointer" }}
                >
                  {state.name}
                </option>
              </>
            ))
          ) : (
            <>Fetching Data...</>
          )}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel
          sx={{
            fontSize: "large",
          }}
        >
          City
        </InputLabel>

        <Select
          value={selectedCity}
          onChange={(e) => {
            handleCityChange(e.target.value);
          }}
          disabled={!selectedState}
          native
          defaultValue=""
          id="grouped-native-select"
          sx={{
            height: responsiveMobile ? null : "3.5rem",
            border: "0.0625rem solid #1a1a1a1f",
            "&:hover": { border: "0.0625rem solid #1a1a1a1f" },
            "& .MuiSelect-root": {
              border: "0.0625rem solid #1a1a1a1f",
            },
          }}
        >
          <option disabled></option>
          {cities && cities ? (
            cities?.map((city) => (
              <>
                <option
                  key={city}
                  value={city}
                  style={{ color: "#2b2a29", cursor: "pointer" }}
                >
                  {city}
                </option>
              </>
            ))
          ) : (
            <>Fetching Data...</>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default LocationDropdowns;
