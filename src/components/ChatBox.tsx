import { useState } from "react";
import { Fab, useMediaQuery } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { ChatModal } from "./ChatModal";
import { useTheme } from "@mui/material/styles";

export const Chatbox: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMinimized, setMinimized] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = () => {
    setModalOpen(true);
    setMinimized(false);
  };

  // Just minimize without flushing the chat history
  const handleMinimizeModal = () => {
    setMinimized(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleOpenModal}
        sx={{
          position: "fixed",
          bottom: isMobile ? 16 : 32,
          right: isMobile ? 16 : 32,
          zIndex: 1000,
        }}
      >
        <ChatIcon />
      </Fab>

      {!isMinimized && (
        <ChatModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onMinimize={handleMinimizeModal}
        />
      )}
    </>
  );
};
