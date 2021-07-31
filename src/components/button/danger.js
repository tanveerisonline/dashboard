import ContainedButton from "./contained";
import { green, purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.secondary.main,
    borderRadius : 8,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}))(ContainedButton);

export default ColorButton;
