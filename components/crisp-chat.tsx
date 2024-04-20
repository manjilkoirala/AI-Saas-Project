"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f24c0c9f-74ae-44c3-a94b-197e41c1e275");
  }, []);

  return null;
};
