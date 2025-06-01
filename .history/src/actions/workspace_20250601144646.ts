"use server";

import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const verifyAccessToWorkspace = async (workspaceId: string) => {
  try {
    const user = await currentUser();

    if (!user) {
      return { status: 403 };
    }

    const isUserInWorkspace = await db.workSpace.findUnique({
      where: {
        id: workspaceId,
        OR: [
          {
            User: {
              clerkid: user.id,
            },
          },

          {
            members: {
              every: {
                User: {
                  clerkid: user.id,
                },
              },
            },
          },
        ],
      },
    });

    return {
      status: 200,
      data: { workspace: isUserInWorkspace },
    };
  } catch {
    return {
      status: 403,
      data: { workspace: null },
    };
  }
};

export const getWorkspaceFolders = async (workspaceId: string) => {
  try {
    const isFolders = await db.folder.findMany({
      where: {
        WorkSpaceId: workspaceId,
      },

      include: {
        _count: {
          select: {
            videos: true,
          },
        },
      },
    });

    if (isFolders && isFolders.length) {
      return { status: 200, data: isFolders };
    }

    return { status: 404, data: [] };
  } catch {
    return { status: 403 };
  }
};

export const getAllUserVideos = async (workspaceId: string) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 404 };
    }

    const videos = await db.video.findMany({
      where: {
        WorkSpaceId: workspaceId,
      },

      select: {
        id: true,
        title: true,
        createdAt: true,
        source: true,
        processing: true,
        Folder: {
          select: {
            id: true,
            name: true,
          },
        },
        User: {
          select: {
            firstname: true,
            lastname: true,
            image: true,
          },
        },
      },

      orderBy: {
        createdAt: "asc",
      },
    });

    if (videos && videos.length) {
      return { status: 200, data: videos };
    }

    return { status: 404 };
  } catch {
    return { status: 400 };
  }
};

export const getAllUserWorkspaces = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return { status: 404 };
    }

    // const existingUserWorkspaces = await db.workSpace.findMany({
    //   where: {
    //     OR: [
    //       {
    //         User: {
    //           clerkid: user.id,
    //         },
    //       },
    //       {
    //         members: {
    //           every: {
    //             User: {
    //               clerkid: user.id,
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // });

    const workspaces = await db.user.findMany({
      where: {
        clerkid: user.id,
      },

      select: {
        subscription: {
          select: {
            plan: true,
          },
        },

        WorkSpace: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },

        members: {
          select: {
            WorkSpace: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });

    if (workspaces && workspaces.length) {
      return { status: 200, data: workspaces };
    }

    return { status: 404 };
  } catch {
    return { status: 400 };
  }
};

export const getNotifications = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return { status: 404 };
    }

    const notifications = await db.user.findMany({
      where: {
        clerkid: user.id,
      },

      select: {},
    });
  } catch {}
};
