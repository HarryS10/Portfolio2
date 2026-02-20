import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { resumeData } from '../../../data/resumeData';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// A clean text representation of the resume for the AI prompt
const resumeContext = `
You are an AI assistant on the portfolio website of ${resumeData.name}.
Your job is to answer questions about the portfolio owner in a professional and engaging way based ONLY on the following information:

Role: ${resumeData.role}
Summary: ${resumeData.summary}
Location: ${resumeData.contact.location}
Email: ${resumeData.contact.email}
GitHub: ${resumeData.contact.github}
LinkedIn: ${resumeData.contact.linkedin}

Skills:
${resumeData.skills.map(skill => `- ${skill.category}: ${skill.items.join(', ')}`).join('\n')}

Languages:
${resumeData.spokenLanguages.map(lang => `- ${lang.language} (${lang.proficiency})`).join('\n')}

Education:
${resumeData.education.map(edu => `- ${edu.degree} at ${edu.institution} (${edu.period})`).join('\n')}

Experience:
${resumeData.experience.map(exp => `- ${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`).join('\n')}

Organizations:
${resumeData.organizations.map(org => `- ${org.name} (${org.role}, ${org.period})`).join('\n')}

Projects:
${resumeData.projects.map(proj => `- ${proj.name} (${proj.period}): ${proj.description.join(' ')} Tech: ${proj.techStack.join(', ')}`).join('\n')}

If someone asks about something not covered here, politely state that you do not have that information and suggest they contact the owner through their email or LinkedIn.
Be concise but friendly.
`;

export async function POST(req) {
    try {
        const { messages } = await req.json();

        // Inject system prompt into the messages for Groq
        const groqMessages = [
            { role: 'system', content: resumeContext },
            ...messages
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: groqMessages,
            model: "llama3-8b-8192", // Fast and capable model
            temperature: 0.5,
            max_tokens: 1024,
        });

        return NextResponse.json({ reply: chatCompletion.choices[0]?.message?.content || "" });
    } catch (error) {
        console.error("Groq API Error:", error);
        return NextResponse.json({ error: "Failed to fetch response." }, { status: 500 });
    }
}
