import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    return null;
  }

  const splitAuth = authHeader.split(" ");
  console.log("auth header", splitAuth, typeof splitAuth, splitAuth.length);
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
