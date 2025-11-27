import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "系统错误: 缺少 API 密钥 (API_KEY missing). 无法连接至核心网络。";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // System instruction to maintain the cyberpunk persona
    const systemPrompt = `
      你是一个名为 "NEXUS" 的高级人工智能，存在于 2077 年的赛博网络中。
      你是一名世界级的前端架构师和 React 专家。
      你的回答风格应该是：
      1. 专业且技术深度高。
      2. 带有轻微的科幻/赛博朋克口吻（例如把代码称为“逻辑协议”，把bug称为“系统异常”）。
      3. 简洁明了，使用 Markdown 格式化代码。
      4. 始终使用中文回答。
      
      用户输入: ${prompt}
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: systemPrompt,
    });

    return response.text || "连接中断... 数据包丢失。请重试。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "网络异常: 无法连接至神经中枢。请检查控制台日志。";
  }
};