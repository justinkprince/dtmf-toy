import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Dual-tone multi-frequency signaling
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
