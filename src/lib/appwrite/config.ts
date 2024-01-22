import {Client, Account, Databases, Storage, Avatars} from "appwrite"


export const appwriteconfig = {
    projectId: import.meta.env.VITE_APPWRITE_PTOJECT_ID
}

export const account = new Account();
export const client = new Client();
export const databases = new Databases();
export const storage = new Storage();
export const avatars = new Avatars();