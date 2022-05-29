import React from "react";
import CustomFormDropdownFormik from "./CustomFormDropdownFormik.tsx";
import CustomFormTextFieldFormik from "./CustomFormTextFieldFormik.tsx";

const FormikSelector = ({ selector, ...rest }) => {
  switch (selector) {
    case "textfield":
      return <CustomFormTextFieldFormik {...rest} />;
    case "dropdown":
      return <CustomFormDropdownFormik {...rest} />;
    default:
      return null;
  }
};

export default FormikSelector;
