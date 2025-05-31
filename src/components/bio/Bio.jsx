import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BioTemplate from "./template/BioTemplate";

const Bio = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["BioData"],
    queryFn: () => axios.get("http://localhost:8000/api/eph-get"),
  });

  return (
    <>
      {/* ... (stats content) */}
      <BioTemplate
        data={data?.data[0]?.duration}
        title={"Experience"}
        className={"border-r-3"}
        isLoading={isLoading}
      />
      <BioTemplate
        data={data?.data[0]?.projectDone}
        title={"Project Done"}
        className={"border-r-3"}
        isLoading={isLoading}
      />
      <BioTemplate
        data={data?.data[0]?.client}
        title={"Happy Clients"}
        isLoading={isLoading}
      />
    </>
  );
};

export default Bio;
