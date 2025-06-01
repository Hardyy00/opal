"use server";

import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";


export const onAuthenticateUser = async()=>{

    try{
        const user = await currentUser();

        if(!user){
            return {status:403};
        }

        const userExist = await db.
    }
}