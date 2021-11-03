/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import uniqid from "uniqid";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { IContact, AppContext } from "../context/AppContext";

export const FormContact = () => {
  const { addNewContact } = useContext(AppContext);
  const classes = useStyles();
  const id = uniqid.time();
  const [contact, setContact] = useState<IContact>({
    id,
    firstName: "",
    lastName: "",
    phone: 0,
  });

  const handleContactInfo = (
    value: number | string,
    field: keyof typeof contact
  ) => {
    setContact({
      ...contact,
      [field]: value,
    });
  };

  const handleNewContact = () => {
    addNewContact(contact);
    setContact({
      id,
      firstName: "",
      lastName: "",
      phone: 0,
    });
  };

  useEffect(() => {
    setContact({
      ...contact,
      id: uniqid.time(),
    });
  }, []);

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
          value={contact.firstName}
          onChange={(e) => handleContactInfo(e.target.value, "firstName")}
        />
        <TextField
          fullWidth
          type="text"
          className={classes.input}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={contact.lastName}
          onChange={(e) => handleContactInfo(e.target.value, "lastName")}
        />
        <TextField
          fullWidth
          type="number"
          className={classes.input}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={contact.phone}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={(e) => handleContactInfo(Number(e.target.value), "phone")}
        />
        <Button onClick={handleNewContact}>Add new contact</Button>
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
