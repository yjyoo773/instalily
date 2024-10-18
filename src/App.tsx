import { ThemeProvider } from "@mui/material/styles";
import { grouponTheme } from "./style/theme";
import { Typography } from "@mui/material";
import { Chatbox } from "./components/ChatBox";
/**
Use MUI because it is easy to customize ==> theme wise
Also using components that are already made to save time.


BASIC COMPONENTS
1. MESSENGER CONTAINER - MINIMIZE & CLOSE (2 ACT DIFFERENTLY) + VOICE ACCESSIBILITY IF POSSIBLE
    CLOSE -> FLUSHES PREVIOUS CONVERSATION
    MINIMIZE -> ONLY MINIMIZE
2. MESSENGER - SEND MESSAGE TO BOT AND GET RESPONSE
3. BUTTON THAT TOGGLES BETWEEN MINIMIZE

 */

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
