import * as React from "react";
import { makeStyles } from "@mui/styles";

export const useAuthStyles = makeStyles({
  auth_avatar__input_file: {
    color: "blue",
    cursor: "pointer",
    marginBottom: "20px",
  },
  auth_avatar__btn_loading: {
    width: "calc(100vw - 200px) !important",
    backgroundColor: "#dce2f0 !important",
    color: "#292a2bc7 !important",
    borderRadius: "8px !important",
    margin: "16px 0px !important",
    letterSpacing: "-0.24px !important",
    height: "40px !important",
    maxWidth: "240px !important",
    minWidth: "200px !important",
    fontFamily: "SFProText !important",
    fontWeight: "600 !important",
    lineHeight: "24px !important",
    textDecoration: "none !important",
  },
});
