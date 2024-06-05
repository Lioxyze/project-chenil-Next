"use client";

import React, { useEffect, useState } from "react";

const Exemple = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [pseudo, setPseudo] = useState<string>("");

  useEffect(() => {
    console.log("FirstName: " + firstname);
    console.log("Lastname: " + lastName);
    console.log("Age: " + age);
    console.log("Pseudo: " + pseudo);
  }, [firstname, lastName, age, pseudo]);

  return <div className="flex flex-col ml-5"></div>;
};

export default Exemple;
