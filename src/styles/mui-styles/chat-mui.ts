import * as React from "react";
import { makeStyles } from "@mui/styles";

export const useChatStyles = makeStyles({
  chat_user_avatar: { width: "33px", height: "33px" },
  chat_user_button: {
    backgroundColor: "white !important",
    color: "gray !important",
    borderRadius: "15px",
    boxShadow: "none",
  },
  chat_add_bar_button: {
    color: "rgba(4, 4, 160, 0.623) !important",
    backgroundColor: "white",
    fontSize: "14px",
    fontFamily: "Roboto",
  },
  chat_card_avatar: {
    width: "60px",
    height: "68px",
    borderRadius: "20px",
  },
  chat_card_delete_icon: {
    fontSize: "17px",
    fontWeight: "700",
    color: "rgba(255, 0, 0, 0.466)",
  },
  chat_guest_info_icon: {
    fontSize: "33px",
    marginRight: "20px",
    color: "rgba(72, 2, 138, 0.748)",
    cursor: "pointer",
  },
  chat_guest_avatar: {
    width: "50px",
    height: "58px",
    borderRadius: "15px",
  },
  message_guest_avatar: {
    width: "44px",
    height: "48px",
    borderRadius: "11px",
  },
  chat_form_input: { width: "100%" },
  chat_form_btn_loader: {
    width: "28px !important",
    height: "28px !important",
    marginLeft: "9px !important ",
    color: "rgba(60, 46, 190);",
  },
  chat_form_btn: { height: "50px", width: "50px" },
  chat_form_icon: {
    color: "rgba(72, 2, 138, 0.748)",
    marginRight: "20px",
    marginLeft: "20px",
    fontSize: "30px",
  },
});
