"use server";

import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403 };
    }

    const existingUser = await db.user.findUnique({
      where: {
        clerkid: user.id,
      },
      include: {
        WorkSpace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    });

    if (!!existingUser) {
      return { status: 200, user: existingUser };
    } else {
      console.log("user not present creating one : ", user.firstName);
      const newUser = await db.user.create({
        data: {
          firstname: user.firstName,
          lastname: user.lastName,
          clerkid: user.id,
          email: user.emailAddresses[0].emailAddress,
          image: user.imageUrl,
          studio: {
            create: {},
          },

          subscription: {
            create: {},
          },

          WorkSpace: {
            create: {
              name: `${user.firstName}'s Workspace`,
            },
          },
        },

        include: {
          WorkSpace: true,
          subscription: true,
        },
      });

      if (newUser) {
        return { status: 201, user: newUser };
      }

      return { status: 400 };
    }
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};
