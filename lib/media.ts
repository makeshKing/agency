/**
 * Shared media helper utilities
 */

export type MediaType = {
  type: "image" | "video";
  url: string;
  posterUrl?: string;
  altText: string;
};

export { convertDriveLink, isSupportedVideoUrl } from "./convertDriveLink";
