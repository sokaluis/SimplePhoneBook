/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import uniqid from "uniqid";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Modal,
  Grid,
} from "@mui/material";
import { IContact, AppContext } from "context/AppContext";
import PlusOne from "@mui/icons-material/PlusOne";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const FormContact = () => {
  const { addNewContact } = useContext(AppContext);
  const classes = useStyles();
  const id = uniqid.time();
  const [contact, setContact] = useState<IContact>({
    id,
    firstName: "",
    lastName: "",
    fullName: "",
    phone: 0,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    addNewContact({
      ...contact,
      fullName: `${contact.firstName} ${contact.lastName}`,
    });
    setContact({
      id,
      firstName: "",
      lastName: "",
      fullName: "",
      phone: 0,
    });
    handleClose();
  };

  useEffect(() => {
    setContact({
      ...contact,
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleOpen}
          className={classes.button}
          endIcon={<PlusOne />}
        >
          Add Contact
        </Button>
      </Grid>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} component="form" className={classes.container}>
          <Typography variant="h5" gutterBottom component="div">
            New Contact
          </Typography>
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
      </Modal>
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
  button: {
    backgroundColor: "#193c56",
    margin: "0.5rem 0",
  },
});
