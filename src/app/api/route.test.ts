/**
 * @vi-environment node
 */

import { GET, POST } from "@/app/api/route";

describe("api", () => {
  describe("GET", () => {
    it("retrieves", async () => {
      const response = await GET();

      expect(response.ok).toBe(true);
      expect(await response.json()).toEqual("Hello World");
    });
  });

  describe("POST", () => {
    it("posts", async () => {
      const response = await POST();

      expect(response.ok).toBe(true);
      expect(await response.json()).toEqual("Hello World - POST");
    });
  });
});
