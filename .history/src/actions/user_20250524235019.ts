"use server";

import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not fou");
    }
  } catch (error) {}
};
