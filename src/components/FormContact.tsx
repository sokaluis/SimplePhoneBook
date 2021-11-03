import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, TextField, Typography } from "@mui/material";

export const FormContact = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom component="div">
        New Contact
      </Typography>
      <Box
        sx={{ width: "100%" }}
        component="form"
        className={classes.container}
      >
        <TextField
          fullWidth
          type="text"
          className={classes.input}
          id="outlined-basic"
          label="Firts Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          type="text"
          className={classes.input}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          type="number"
          className={classes.input}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    margin: "0.5rem 0",
  },
});
