import express from "express";
import si from "systeminformation";

const app = express();
const PORT = 8000;

async function getSystemInformation() {
  return {
    cpu: await si.cpu(),
    system: await si.system(),
    mem: await si.mem(),
    os: await si.osInfo(),
    currentLoad: await si.currentLoad(),
    processes: await si.processes(),
    diskLayout: await si.diskLayout(),
    networkInterfaces: await si.networkInterfaces(),
  };
}

app.get("/api/v1/sysinfo", async (_req, res) => {
  try {
    const info = await getSystemInformation();
    res.json(info);
  } catch {
    res.status(500).json({ error: "Unable to fetch system info" });
  }
});

app.use((_req, res) => res.status(404).json({ error: "Not Found" }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

export { getSystemInformation };

