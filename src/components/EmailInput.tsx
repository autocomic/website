import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export default withStyles({
  root: {
    "& label": {
      fontSize: 14,
      fontWeight: 300,
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: 14,
      fontWeight: 300,
      color: "white",
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);
