import { ApiError } from "next/dist/server/api-utils";

export const isApiError = (x: any): x is ApiError => {
  return typeof x.statusCode === "number";
};
