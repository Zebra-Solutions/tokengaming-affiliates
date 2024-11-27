export default async function handler(req, res) {
  try {
    const response = await fetch("https://dashboard.tokengamingaffiliates.xyz/api/client/partner/policy");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).json({ error: "Failed to fetch policy" });
  }
}