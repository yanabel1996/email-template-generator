import { createSlice } from "@reduxjs/toolkit";

const templateReducer = createSlice({
  name: "template",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    phoneNumber: "",
    companyLink: "",
    profilePicture: "",
    companyLogo:
      "https://res.cloudinary.com/dzsvdigz2/image/upload/v1731092767/Email%20template%20generator/qjrocrsvkuqegdqw9nlk.png",
    themeColor: "#004C47",
    textColor: "#000000",
    linkColor: "#000000",
    fontSize: 0,
    fontFamily: "Arial",
    fontSizeTooltip: "small",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setCompanyLink: (state, action) => {
      state.companyLink = action.payload;
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    setCompanyLogo: (state, action) => {
      state.companyLogo = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    setLinkColor: (state, action) => {
      state.linkColor = action.payload;
    },
    setFontSize: (state, action) => {
      let tooltipText;
      if (action.payload === "0") {
        tooltipText = "small";
      } else if (action.payload === "50") {
        tooltipText = "medium";
      } else {
        tooltipText = "large";
      }
      state.fontSizeTooltip = tooltipText;
      state.fontSize = action.payload;
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
  },
});

export const {
  setFontSize,
  setFontFamily,
  setFirstName,
  setEmail,
  setLastName,
  setJobTitle,
  setPhoneNumber,
  setCompanyLink,
  setProfilePicture,
  setCompanyLogo,
  setCompanyName,
  setLinkColor,
  setThemeColor,
  setTextColor,
} = templateReducer.actions;

export default templateReducer.reducer;
