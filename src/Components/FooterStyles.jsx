import { border, width } from "@material-ui/system";

export const footer = theme => ({
  paper: {
    position: "sticky",
    top: "calc(100% - 166px + 86px)",
    overflow: "hidden",
    marginTop: "30px",
    color: "black",
    border: "10px solid green",
    height: "100vh",
    width: "100vw"
  },
  grid: {
    color: "green",
    border: "10px solid red",
    height: "95vh",
    width: "95vh"
  }
});
