require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
const origin = process.env.ORIGIN;
const cors = require("cors");
app.use(cors({
  origin: origin,
}));
app.use(express.json());

app.post("/chat", async (req, res) => {
  const input = req.body.input;
  try {
    const response = await axios.post(
      "https://api.langflow.astra.datastax.com/lf/75a102b0-062a-41de-a72a-4b3adf17aa76/api/v1/run/0e0e26ae-a8cf-48bf-8b35-d91118277148?stream=false",
      {
        input_value: input,
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "ParseData-bU2Lk": {},
          "SplitText-s45X9": {},
          "OpenAIModel-Bunci": {},
          "ChatOutput-8sI0F": {},
          "AstraDB-66x6b": {},
          "File-j3YRd": {},
          "ChatInput-iAwEu": {},
          "CombineText-1kBZ6": {},
          "TextInput-upHmt": {},
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${process.env.LANGFLOW_API_KEY}`,
        },
      }
    );
    const message = response.data.outputs[0].outputs[0].results.message.text;
    res.json({ status: true, message: message });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: "Something went wrong please try again later" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
