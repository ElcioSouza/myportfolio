import dotenv from "dotenv";
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICEID: process.env.SERVICEID,
        TEMPLATEID: process.env.TEMPLATEID,
        USERID: process.env.USERID
    }
};
export default nextConfig;
