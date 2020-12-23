import { TextField, Typography } from "@material-ui/core";
import React from "react";
import MaskedInput from "react-input-mask";
import { Controller, useFormContext } from "react-hook-form";

const CreditCard = ({ name, label }) => {
  const { register, handleSubmit, watch, errors } = useFormContext();
  const [state, setState] = React.useState({
    value: "",
    mask: "9999 9999 9999 9999",
  });

  const { control } = useFormContext();

  return (
    <>
      {/* <Controller
        control={control}
        as={MaskedInput}
        mask={state.mask}
        alwaysShowMask
        onChange={(e) => {
          console.log(e.target.value);
        }}
        value={state.value}
        name={name}
        style={{
          border: "none",
          width: "100%",
          textAlign: "center",
          fontSize: "45px",
        }}
      /> */}
      <Controller
        as={MaskedInput}
        control={control}
        mask={state.mask}
        // alwaysShowMask
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
          //   pattern: /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/im,
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
            // ref={register({
            //   required: true,
            //   pattern: /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/im,
            // })}
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
