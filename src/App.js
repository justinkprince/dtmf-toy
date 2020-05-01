import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import Header from "./components/Header";
import AudioPanel from "./components/AudioPanel";
import { Container, ThemeProvider, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

function App(props) {
  const classes = useStyles(props);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <AudioPanel />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
