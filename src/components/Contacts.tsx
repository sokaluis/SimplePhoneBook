/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSearchContact } from "../hooks/useSearchContact";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import SearchInput from "./SearchInput";
import { IContact } from "../context/AppContext";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = () => {
  const styles = useStyles();
  const { contactList, isFetching } = useSearchContact();
  const [term, setTerm] = useState("");
  const [contacFiltered, setContacFiltered] = useState<IContact[]>(contactList);

  useEffect(() => {
    if (term.length === 0) {
      setContacFiltered(contactList);
    }
  }, [contactList]);

  useEffect(() => {
    if (term.length === 0) {
      return setContacFiltered(contactList);
    }
    if (isNaN(Number(term))) {
      setContacFiltered(
        contactList.filter((item) =>
          item.fullName.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    } else {
      const contacNumber = contactList.find((item) => item.id === term);
      setContacFiltered(contacNumber ? [contacNumber] : []);
    }
  }, [term]);

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography variant="h5" gutterBottom component="div">
        Contacts
      </Typography>
      <SearchInput onDebounce={setTerm} />
      {isFetching ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <List sx={{ width: "100%" }}>
          {contacFiltered
            .map((item) => (
              <ListItem
                key={item.id}
                alignItems="flex-start"
                sx={{
                  backgroundColor: "#193c56",
                  color: "#FFF",
                  marginBottom: "1rem",
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={item.firstName}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.firstName} ${item.lastName}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline", color: "#FFF" }}
                        component="span"
                        variant="body2"
                      >
                        {item.phone}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Stack direction="row" spacing={1} mt={1}>
                  <IconButton sx={{ color: "#FFF" }} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton sx={{ color: "#FFF" }} aria-label="delete">
                    <EditIcon />
                  </IconButton>
                </Stack>
              </ListItem>
            ))
            .reverse()}
        </List>
      )}
    </Container>
  );
};

const useStyles = makeStyles({
  container: {},
});

export default Contacts;
