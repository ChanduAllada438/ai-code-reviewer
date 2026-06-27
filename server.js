const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenAI } = require('@google/genai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Gen AI with the API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// POST route to handle code analysis
app.post('/api/review', async (req, res) => {
    const { code, language } = req.body;

    if (!code) {
        return res.status(400).json({ error: "No code provided for review." });
    }

    try {
        const systemInstruction = `
            You are an expert Senior Software Engineer and QA Automation expert. 
            Analyze the following code snippet written in ${language || 'JavaScript'}.
            Provide your response in a clean, structured JSON format containing exactly three keys:
            1. "review": A detailed code review highlighting performance issues, security gaps, or bugs.
            2. "optimizations": A rewritten, optimized, and cleaner version of the provided code.
            3. "unitTests": A comprehensive set of unit tests using Jest framework targeting this code.
            
            Do not include any Markdown or formatting wraps like \`\`\`json outside the raw JSON object. Response must be pure parsable JSON string.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: [
                { role: 'user', parts: [{ text: `${systemInstruction}\n\nCode to review:\n${code}` }] }
            ]
        });

        const rawText = response.text;
        const parsedData = JSON.parse(rawText.trim());
        
        return res.json({ success: true, data: parsedData });

    } catch (error) {
        console.error("Error communicating with AI layer:", error);
        return res.status(500).json({ 
            error: "Failed to process code analysis.", 
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Architecture active. Server running securely on port ${PORT}`);
});