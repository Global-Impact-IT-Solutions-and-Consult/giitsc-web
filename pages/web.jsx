import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import webImg from "../public/images/servicePage/web.png";

const web = () => {
  return <ServicePage title={"Web Development"} image={webImg} />;
};

export default web;
