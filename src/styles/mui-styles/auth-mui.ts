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
    backgroundColor: "#398fe5 !important",
    color: "white !important",
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
  auth_avatar__btn_loading_active: {
    backgroundColor: "white",
    width: "calc(100vw - 300px) !important",
    color: "white !important",
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
