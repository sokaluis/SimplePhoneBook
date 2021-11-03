import { Grid } from "@mui/material";
import Contacts from "./components/Contacts";
import { FormContact } from "./components/FormContact";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Grid container>
        <Grid item xs={6}>
          <FormContact />
        </Grid>
        <Grid item xs={6}>
          <Contacts />
        </Grid>
      </Grid>
    </AppProvider>
  );
};

export default App;
