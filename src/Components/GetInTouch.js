import React from "react";
import { Typography } from "@mui/material";
import ShowEmailButton from "./ShowEmailButton";
import MyLinksIcons from "./MyLinksIcons";

export default function GetInTouch() {
  return (
    <div className="display-flex align-items-center flex-direction-column gap-l">
      <div className="display-flex align-items-center flex-direction-column gap-m">
        <Typography variant="h4">Let's Get in Touch!</Typography>
        <Typography variant="h7" color="#9C9C9C">
          Feel free to reach out to me on any of my socials.
        </Typography>
        <MyLinksIcons iconSize={40} />
        <Typography variant="h7" color="#9C9C9C">
          Or send me an email here. You have to pass the test first, though!
        </Typography>
        <ShowEmailButton></ShowEmailButton>
      </div>
      {/* <div
        className="display-flex flex-direction-column gap-m"
        style={{ maxWidth: "350px", width: "100%" }}
      >
        <TextInput
          label="Email"
          placeholder="Please enter your email"
        ></TextInput>
        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
        ></TextInput>
        <TextInput
          label="Message"
          placeholder="Enter your message"
          ismultiline={true}
        ></TextInput>
      </div> */}
    </div>
  );
}
