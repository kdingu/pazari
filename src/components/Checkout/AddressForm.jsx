import React, { useEffect } from "react";
import {
  InputLabel,
  Select,
  Button,
  Grid,
  FormControl,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/actions";

const AddressForm = ({ checkoutId, next }) => {
  const methods = useForm();

  const firstname = useSelector((state) => state.checkout.formData.firstname);
  const lastname = useSelector((state) => state.checkout.formData.lastname);
  const address1 = useSelector((state) => state.checkout.formData.address1);
  const email = useSelector((state) => state.checkout.formData.email);
  const city = useSelector((state) => state.checkout.formData.city);
  const zip = useSelector((state) => state.checkout.formData.zip);

  const countries = useSelector((state) => state.checkout.shippingCountries);
  const countriesArray = Object.entries(countries).map(([code, name]) => ({
    code,
    name,
  }));
  const country = useSelector(
    (state) => state.checkout.formData.shippingCountry
  );

  const subdivisions = useSelector(
    (state) => state.checkout.shippingSubdivisions
  );
  const subdivisionsArray = Object.entries(
    subdivisions
  ).map(([code, name]) => ({ code, name }));
  const subdivision = useSelector(
    (state) => state.checkout.formData.shippingSubdivision
  );

  const options = useSelector((state) => state.checkout.shippingOptions);
  const option = useSelector((state) => state.checkout.formData.shippingOption);

  const dispatch = useDispatch();

  useEffect(() => {
    if (country)
      dispatch(
        checkoutActions.getShippingSubdivisions(checkoutId, country)
      ).then((res) => {
        const firstSubdivision = Object.keys(res)[0];
        if (!subdivision && firstSubdivision)
          dispatch(checkoutActions.setShippingSubdivision(firstSubdivision));
      });
  }, [country]);

  useEffect(() => {
    if (subdivision)
      dispatch(
        checkoutActions.getShippingOptions(checkoutId, country, subdivision)
      ).then((op) => {
        const opId = op[0].id || false;
        if (opId) dispatch(checkoutActions.setShippingOption(opId));
      });
  }, [subdivision]);

  const handleCountryChange = (e) => {
    dispatch(checkoutActions.setShippingCountry(e.target.value));
  };

  const handleSubdivisionChange = (e) => {
    dispatch(checkoutActions.setShippingSubdivision(e.target.value));
  };

  const handleOptionChange = (e) => {
    dispatch(checkoutActions.setShippingOption(e.target.value));
  };

  const onSubmit = (data) => {
    dispatch(checkoutActions.setFormData(data));
    next();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <FormInput
              label="Emri"
              name="firstname"
              required
              defaultValue={firstname}
            />
            <FormInput
              label="Mbiemri"
              name="lastname"
              required
              defaultValue={lastname}
            />
            <FormInput
              label="Adresa"
              name="address1"
              required
              defaultValue={address1}
            />
            <FormInput
              label="Email"
              name="email"
              required
              defaultValue={email}
            />
            <FormInput
              label="Qyteti"
              name="city"
              required
              defaultValue={city}
            />
            <FormInput label="ZIP" name="zip" required defaultValue={zip} />
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required color="secondary">
                <InputLabel>Shteti i dërgesës</InputLabel>
                <Select native value={country} onChange={handleCountryChange}>
                  <option aria-label="None" value="" disabled />
                  {countriesArray.map(({ code, name }) => (
                    // <MenuItem key={code} value={code}>
                    //   {name}
                    // </MenuItem>
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                required
                color="secondary"
                disabled={subdivisionsArray.length === 0}
              >
                <InputLabel>Zona e dërgesës</InputLabel>
                <Select
                  native
                  value={subdivision}
                  onChange={handleSubdivisionChange}
                >
                  <option aria-label="None" value="" disabled />
                  {subdivisionsArray.map(({ code, name }) => (
                    // <MenuItem key={code} value={code}>
                    //   {name}
                    // </MenuItem>
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                fullWidth
                required
                color="secondary"
                disabled={options.length === 0}
              >
                <InputLabel>Opsionet e dërgesës</InputLabel>
                <Select native value={option} onChange={handleOptionChange}>
                  <option aria-label="None" value="" disabled />
                  {options.map(
                    ({ id, description, price: { formatted_with_code } }) => (
                      // <MenuItem key={op.id} value={op.id}>
                      //   {op.description} - {op.price.formatted_with_code}
                      // </MenuItem>
                      <option key={id} value={id}>
                        {description} - ({formatted_with_code})
                      </option>
                    )
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid align="right" item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
              >
                Vazhdo
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
