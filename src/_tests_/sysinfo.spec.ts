import request from "supertest";
import express from "express";
import { getSystemInformation } from "../index";

const app = express();

app.get("/api/v1/sysinfo", async (_req, res) => {
  const info = await getSystemInformation();
  res.json(info);
});
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));

describe("API Sysinfo", () => {
  it("should return system information on /api/v1/sysinfo", async () => {
    const res = await request(app).get("/api/v1/sysinfo");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("cpu");
    expect(res.body).toHaveProperty("system");
    expect(res.body).toHaveProperty("mem");
    expect(res.body).toHaveProperty("os");
    expect(res.body).toHaveProperty("currentLoad");
    expect(res.body).toHaveProperty("processes");
    expect(res.body).toHaveProperty("diskLayout");
    expect(res.body).toHaveProperty("networkInterfaces");
  }, 15000);

  it("should return 404 on unknown routes", async () => {
    const res = await request(app).get("/unknown");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error", "Not Found");
  });
});
