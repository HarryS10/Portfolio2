import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { resumeData } from '../../../data/resumeData';

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
    let API_KEY = process.env.GROQ_API_KEY;

    if (!API_KEY) {
        console.error("CRITICAL ERROR: GROQ_API_KEY is not set in environment variables.");
        return NextResponse.json(
            { error: "API Key not configured. Please contact the administrator." },
            { status: 500 }
        );
    }

    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            console.error("Bad Request: Messages array is missing or invalid.");
            return NextResponse.json(
                { error: "Invalid request format." },
                { status: 400 }
            );
        }

        const groq = new Groq({
            apiKey: API_KEY,
        });

        // Inject system prompt into the messages for Groq
        const groqMessages = [
            { role: 'system', content: resumeContext },
            ...messages
        ];

        console.log(`Sending request to Groq API with ${groqMessages.length} messages...`);

        const chatCompletion = await groq.chat.completions.create({
            messages: groqMessages,
            model: "llama3-70b-8192", // User requested valid latest model
            temperature: 0.5,
            max_tokens: 1024,
        });

        const reply = chatCompletion.choices[0]?.message?.content;

        if (!reply) {
            console.error("Groq API returned an empty response.");
            throw new Error("Empty response from AI model.");
        }

        console.log("Successfully received response from Groq.");

        return NextResponse.json({ reply: reply });
    } catch (error) {
        console.error("Groq API Integration Error:", error);
        return NextResponse.json(
            { error: "Our AI assistant is currently experiencing high load. Please try again later." },
            { status: 500 }
        );
    }
}
