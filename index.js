const express = require("express");
const axios = require("axios");
const app = express();

app.get("/rap/:userid", async (req, res) => {
  const userId = req.params.userid;

  try {
    const response = await axios.get(`https://www.rolimons.com/playerapi/player/${userId}`);
    const rap = response.data.player_assets_summary.rap || 0;
    res.json({ rap });
  } catch (error) {
    res.status(500).json({ rap: 0 });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("RAP API running");
});
