# Social Insights - Pre-Hackathon Assignment

## Project Title: Social Insights - Social Media Performance Analysis

### Submission for Level Supermind Hackathon

---

## Table of Contents
1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Video Demonstration](#video-demonstration)
6. [Langflow Workflow](#langflow-workflow)
7. [How it Works](#how-it-works)

---

## Introduction
**Social Insights** is a simple AI-powered chat app that provides insights and metrics based on data. It uses the Langflow API for responses. In Langflow, we utilized Astra DB and Google Gemini for AI processing.

---

## Project Overview
The goal of this project is to:
1. Simulate social media engagement data.
2. Store and query data using **DataStax Astra DB**.
3. Use **Langflow** to analyze the data and calculate engagement metrics based upon user input.
4. Leverage GPT (Google Gemini) integration to generate insights about post-performance.

---

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** DataStax Astra DB (NoSQL database)
- **AI Integration:** Langflow (for GPT-powered insights)
- **Deployment:** Vercel (Frontend) and Render (Backend)

---

## Features
1. **Dataset Simulation:**
   - Mock engagement data for post types (carousel, reels, static images).
   - Data includes likes, comments, and shares.
2. **Database Management:**
   - Astra DB for storing and querying the data.
3. **Workflow Creation:**
   - Langflow to process data and generate engagement metrics.
4. **AI Insights:**
   - GPT integration to deliver insights into post performance.
5. **Chat App Integration:**
   - Built a chat app called **Social Insights** to generate answers based on input, fetching data from Astra DB using the Langflow API.

---

## Video Demonstration
[Watch Video on YouTube](<insert-youtube-link>)

---

## Langflow Workflow
![Langflow Workflow](<https://github.com/sarthakitaliya/Socialinsights/blob/main/langflow/work%20flow.png>)

---

## How it Works
1. The user inputs their query.
2. Langflow API is called.
3. The user question is searched in Astra DB.
4. The retrieved data is sent to the prompt component.
5. The prompt combines the user question and context (from the database).
6. The prompt is sent to the Gemini system message with additional context.
7. Finally, the AI generates and returns an answer.

