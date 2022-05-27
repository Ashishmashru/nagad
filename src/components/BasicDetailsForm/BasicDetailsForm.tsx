import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DropDown from "../FormComponents/DropDown/DropDown.tsx";
import Label from "../FormComponents/Label/Label.tsx";
import TextField from "../FormComponents/TextField/TextField.tsx";
import "./BasicDetailsForm.css";

const BasicDetailsForm = ({ pageNo }) => {
  return (
    <Box component="form" autoComplete="off">
      {pageNo === 0 && (
        <Box component="span">
          <Label htmlFor="phoneno" fieldName="Phone Number" />
          <TextField
            type="number"
            id="phoneno"
            placeholder="Enter Number"
            name="phoneno"
          />
          <Label htmlFor="MNO" fieldName="Please Select MNO" />
          <DropDown
            options={[
              "NID",
              "Birth certificate",
              "Passport",
              "Driving License",
            ]}
          />
        </Box>
      )}

      {pageNo === 1 && (
        <Box component="span">
          <Label htmlFor="merchantName" fieldName="Merchant Name*" />
          <TextField type="text" id="merchantName" name="merchantName" />
          <Label htmlFor="email" fieldName="Email*" />
          <TextField type="text" id="email" name="email" />
          <Label
            htmlFor="merchantCategory"
            fieldName="Select Merchant Category*"
          />
          <DropDown options={[]} />
          <Label htmlFor="gender" fieldName="Gender*" />
          <DropDown options={["Male", "Female"]} />
          <Label htmlFor="merchantType" fieldName="Select Merchant Type*" />
          <DropDown options={[]} />
          <Label htmlFor="organisationName" fieldName="Organisation Name*" />
          <TextField
            type="text"
            id="organisationName"
            name="organisationName"
          />
          <Label htmlFor="organisationType" fieldName="Organisation Type*" />
          <DropDown options={[]} />
          <Label
            htmlFor="organisationaddress"
            fieldName="Organisation Address*"
          />
          <TextField
            type="text"
            id="organisationaddress"
            name="organisationaddress"
          />
          <Label
            htmlFor="village/area"
            fieldName="Type or Select Village/Area"
          />
          <DropDown options={[]} />
          <Label
            htmlFor="Thana/Upazila"
            fieldName="Type or Select Thana/Upazila"
          />
          <DropDown options={[]} />
          <Label htmlFor="division" fieldName="Type or Select Division" />
          <DropDown options={[]} />
          <Label htmlFor="postoffice" fieldName="Post Office" />
          <TextField type="text" id="postoffice" name="postoffice" />
          <Label htmlFor="postcode" fieldName="Post code*" />
          <TextField type="text" id="postcode" name="postcode" />
        </Box>
      )}

      {pageNo === 2 && (
        <Box component="span">
          <Typography variant="h6">Basic Additional Details</Typography>
          <Label htmlFor="applicantName" fieldName="Applicant Name*" />
          <TextField type="text" id="applicantName" name="applicantName" />
          <Label htmlFor="photoId" fieldName="Photo Id Number*" />
          <TextField type="number" id="photoId" name="photoId" />
          <Label
            htmlFor="merchantRelationship"
            fieldName="Select Merchant Category*"
          />
          <DropDown options={[]} />
          <Label
            htmlFor="merchantAccnum"
            fieldName="Merchant Account Number*"
          />
          <TextField type="text" id="merchantAccnum" name="merchantAccnum" />
          <Label htmlFor="gender" fieldName="Gender*" />
          <DropDown options={["Male", "Female"]} />
          <Label htmlFor="fathername" fieldName="Father's Name*" />
          <TextField type="text" id="fathername" name="fathername" />
          <Label htmlFor="mothername" fieldName="Mother's Name*" />
          <TextField type="text" id="mothername" name="mothername" />
          <Label htmlFor="personaladdress" fieldName="Personal Address*" />
          <TextField type="text" id="personaladdress" name="personaladdress" />
          <Label
            htmlFor="village/area"
            fieldName="Type or Select Village/Area"
          />
          <DropDown options={[]} />
          <Label
            htmlFor="Thana/Upazila"
            fieldName="Type or Select Thana/Upazila"
          />
          <DropDown options={[]} />
          <Label htmlFor="division" fieldName="Type or Select Division" />
          <DropDown options={[]} />
          <Label htmlFor="postoffice" fieldName="Post Office" />
          <TextField type="text" id="postoffice" name="postoffice" />
          <Label htmlFor="postcode" fieldName="Post code*" />
          <TextField type="text" id="postcode" name="postcode" />
        </Box>
      )}
      {pageNo === 3 && (
        <Box component="span">
          <Typography variant="h6">Other Details</Typography>
          <Label htmlFor="detail1" fieldName="Details*" />
          <TextField type="text" id="detail1" name="detail1" />
          <Label htmlFor="detail2" fieldName="Details*" />
          <TextField type="text" id="detail2" name="detail2" />
          <Label htmlFor="detail3" fieldName="Details*" />
          <TextField type="text" id="detail3" name="detail3" />
          <Label htmlFor="detail4" fieldName="Details*" />
          <TextField type="text" id="detail4" name="detail4" />
          <Label htmlFor="detail5" fieldName="Details*" />
          <TextField type="text" id="detail5" name="detail5" />
          <Label htmlFor="detail6" fieldName="Details*" />
          <TextField type="text" id="detail6" name="detail6" />
          <Label htmlFor="detail7" fieldName="Details*" />
          <TextField type="text" id="detail7" name="detail7" />
          <Label htmlFor="detail8" fieldName="Details*" />
          <TextField type="text" id="detail8" name="detail8" />
        </Box>
      )}
    </Box>
  );
};

export default BasicDetailsForm;
