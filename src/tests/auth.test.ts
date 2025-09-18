import { expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";

const correctTempHeader: IncomingHttpHeaders = {
  authorization: "ApiKey ApiKey",
};

const incorrectTempHeader: IncomingHttpHeaders = {};

test("Bearer token is provided", () => {
  expect(getAPIKey(correctTempHeader)).toBe("ApiKey");
});

test("No Bearer token", () => {
  expect(getAPIKey(incorrectTempHeader)).toBe(null);
});
