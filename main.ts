import { config } from './config';
import { CohereClient } from 'cohere-ai';

const API_KEY = 'COHERE_API_KEY';

interface Message {
	role: 'USER' | 'CHATBOT';
	message: string;
}

interface Completion {
	Content: string | null;
	TokenUsage: number | undefined;
}

interface ConnectorResponse {
	Completions: Completion[];
	ModelType: string;
}

interface ChatCompletion {
	output: string;
	stats: { model: string };
}

const mapToResponse = (outputs: ChatCompletion[]): ConnectorResponse => {
	return {
		Completions: outputs.map((output) => ({
			Content: output.output,
			TokenUsage: undefined, // Token usage is not provided by Cohere API
		})),
		ModelType: outputs[0].stats.model,
	};
};

async function main(
	model: string,
	prompts: string[],
	properties: Record<string, unknown>,
	settings: Record<string, unknown>,
): Promise<ConnectorResponse> {
	const cohere = new CohereClient({
		token: settings?.[API_KEY] as string,
	});

	const { ...restProperties } = properties;

	const messageHistory: Message[] = [];

	const outputs: ChatCompletion[] = [];

	try {
		for (const prompt of prompts) {
			messageHistory.push({ role: 'USER', message: prompt });

			const response = await cohere.chatStream({
				chatHistory: messageHistory,
				message: prompt,
				model,
				...restProperties,
			});

			let assistantResponse = '';
			for await (const message of response) {
				if (message.eventType === 'text-generation') {
					assistantResponse += message.text;
				}
			}

			messageHistory.push({ role: 'CHATBOT', message: assistantResponse });
			outputs.push({ output: assistantResponse, stats: { model } });
			console.log(`Cohere response to prompt: ${prompt}`, assistantResponse);
		}

		return mapToResponse(outputs);
	} catch (error) {
		console.error('Error in main function:', error);
		throw error;
	}
}

export { main, config };
