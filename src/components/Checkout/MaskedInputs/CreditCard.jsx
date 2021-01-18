import { TextField, Typography } from "@material-ui/core";
import React from "react";
import MaskedInput from "react-input-mask";
import { Controller, useFormContext } from "react-hook-form";

const CreditCard = ({ name, label }) => {
  const [state, setState] = React.useState({
    value: "",
    mask: "9999 9999 9999 9999",
  });

  const { control } = useFormContext();

  return (
    <>
      <Controller
        as={MaskedInput}
        control={control}
        mask={state.mask}
        onChange={(e) => {
          const value = e.target.value;
          const newState = {
            value,
            mask: "9999-9999-9999-9999",
          };

          if (/^3[47]/.test(value)) {
            newState.mask = "9999-999999-99999";
          }

          setState(newState);
        }}
        rules={{
          required: true,
        }}
        defaultValue={state.value}
        value={state.value}
        label={label}
        name={name}
        style={{
          border: "none",
          width: "100%",
          textAlign: "center",
          fontSize: "45px",
        }}
      >
        {(inputProps) => (
          <TextField
            label={inputProps.label}
            value={inputProps.value}
            defaultValue={inputProps.defaultValue}
            name={inputProps.name}
            {...inputProps}
          />
        )}
      </Controller>
    </>
  );
};

export default CreditCard;
