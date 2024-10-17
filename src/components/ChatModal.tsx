import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Close, Minimize, Send } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useScrollToBottom } from "../hooks/useScrollToBottom";
import { Message } from "../types/Message";
import { ChatModalProps } from "../types/ChatModalProps";

export const ChatModal: React.FC<ChatModalProps> = ({
  isOpen,
  onClose,
  onMinimize,
}) => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { content: "he", sender: "other" },
  ]);

  const theme = useTheme();
  const messagesEndRef = useScrollToBottom([chatHistory]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage: Message = { content: message, sender: "user" };
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {}}
      aria-labelledby="chat-modal"
      aria-describedby="chat-modal-description"
      hideBackdrop
    >
      <Box
        sx={{
          position: "fixed",
          bottom: isMobile ? 0 : 16,
          right: isMobile ? 0 : 16,
          width: isMobile ? "100vw" : 400,
          height: isMobile ? "100vh" : "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: isMobile ? 0 : 4,
          borderRadius: isMobile ? "12px 12px 0 0" : "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header with Minimize and Close buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton onClick={onClose}>
              <Minimize />
            </IconButton>
            <IconButton onClick={onMinimize}>
              <Close />
            </IconButton>
          </Box>
        </Box>

        {/* Chat history display */}
        <Box
          sx={{
            height: isMobile ? "80%" : 200,
            overflowY: "auto",
            border: "1px solid #CCC",
            p: 2,
            mb: 2,
            mt: 2,
            borderRadius: "4px",
          }}
        >
          {chatHistory.length > 0 ? (
            chatHistory.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start", // Align based on sender
                }}
                ref={messagesEndRef}
              >
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    p: 1,
                    maxWidth: "70%",
                    bgcolor: msg.sender === "user" ? "#53A318" : "#F0F0F0", // Color based on sender
                    color: msg.sender === "user" ? "white" : "black",
                    borderRadius: "8px",
                  }}
                >
                  {msg.content}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2">No messages yet.</Typography>
          )}
        </Box>

        {/* Input and Send Button */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <TextField
            aria-label="type message"
            minRows={2}
            placeholder="Type a message..."
            style={{
              width: "calc(100% - 48px)",
              borderRadius: "8px",
              border: "1px solid #CCC",
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              !e.shiftKey &&
              (handleSendMessage(), e.preventDefault())
            } // Send on Enter
          />
          <IconButton
            color="primary"
            aria-label="send message"
            onClick={handleSendMessage}
            sx={{
              marginLeft: "8px",
              backgroundColor: "#53A318",
              color: "white",
              "&:hover": { backgroundColor: "#3E7A13" },
            }}
          >
            <Send />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};
