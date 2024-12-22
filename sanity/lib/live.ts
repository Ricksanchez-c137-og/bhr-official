import "server-only";
import { client } from "@/sanity/lib/client";
import { defineLive } from "next-sanity";

const token = process.env.SANITY_READ_TOKEN;
if (! token) {
  throw new Error("SANITY_READ_TOKEN is not defined");
}

export const {sanityFetch, SanityLive} = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});