import { ThemeProvider } from "@mui/material/styles";
import { grouponTheme } from "./style/theme";
import { Typography } from "@mui/material";
import { Chatbox } from "./components/ChatBox";

function App() {
  return (
    <ThemeProvider theme={grouponTheme}>
      <Typography variant="h1" gutterBottom>
        Welcome to Groupon
      </Typography>
      <Chatbox />
    </ThemeProvider>
  );
}

export default App;
