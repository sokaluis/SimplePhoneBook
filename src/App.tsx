import { Container, Grid, Typography } from "@mui/material";
import { AppProvider } from "./context/AppContext";
import Contacts from "./components/Contacts";
import { FormContact } from "./components/FormContact";

const App = () => {
  return (
    <AppProvider>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              align="center"
            >
              My Phone Book
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <FormContact />
        </Grid>
        <Grid item xs={12}>
          <Contacts />
        </Grid>
      </Grid>
    </AppProvider>
  );
};

export default App;
