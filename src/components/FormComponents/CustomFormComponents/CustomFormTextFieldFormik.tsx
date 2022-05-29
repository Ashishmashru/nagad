import {
  FormControl,
  InputLabel,
  FormLabel,
  TextField,
  makeStyles,
} from "@mui/material";

const CustomFormTextFieldFormik = (props) => {
  const { type, label, placeholder, name } = props;

  return (
    <FormControl hiddenLabel={true} component="fieldset">
      <FormLabel component="label">{label}</FormLabel>
      <TextField type={type} placeholder={placeholder} name={name} />
    </FormControl>
  );
};

export default CustomFormTextFieldFormik;
