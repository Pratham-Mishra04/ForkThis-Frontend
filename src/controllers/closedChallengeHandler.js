import React from "react";

import getHandler from "../reqHandlers/getHandler";
const closedchallengeHandler = async () => {
  const URL = `https://794a-136-233-9-97.in.ngrok.io/challenge/closed`;
  const res = await getHandler(URL);
  console.log(res.data.data);
  return res.data.data;
};

export default closedchallengeHandler;
