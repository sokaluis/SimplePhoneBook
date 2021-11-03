/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSearchContact } from "../hooks/useSearchContact";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import SearchInput from "./SearchInput";
import { IContact } from "../context/AppContext";

const Contacts = () => {
  const { contactList, isFetching } = useSearchContact();
  const [term, setTerm] = useState("");
  const [contacFiltered, setContacFiltered] = useState<IContact[]>(contactList);

  console.log("term", term.length);
  console.log("contacFiltered antes", contacFiltered);

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
          item.firstName.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    } else {
      const contacNumber = contactList.find((item) => item.id === term);
      setContacFiltered(contacNumber ? [contacNumber] : []);
    }
  }, [term]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom component="div">
        Your Contacts
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
              <div key={item.id}>
                <ListItem alignItems="flex-start">
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
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.phone}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))
            .reverse()}
        </List>
      )}
    </Container>
  );
};

export default Contacts;
