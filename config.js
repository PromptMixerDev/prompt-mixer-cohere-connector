export const config = {
	connectorName: 'Cohere',
	models: [
		'command-light',
		'command-light-nightly',
		'command',
		'command-nightly',
		'command-r',
	],
	settings: [
		{
			id: 'COHERE_API_KEY',
			name: 'API Key',
			value: '',
			type: 'string',
		},
	],
	properties: [
		{
			id: 'max_tokens',
			name: 'Max Tokens',
			value: 4096,
			type: 'number',
		},
		{
			id: 'temperature',
			name: 'Temperature',
			value: 0.3,
			type: 'number',
		},
		{
			id: 'k',
			name: 'K',
			value: 0,
			type: 'number',
		},
		{
			id: 'p',
			name: 'P',
			value: 0.75,
			type: 'number',
		},
		{
			id: 'frequency_penalty',
			name: 'Frequency Penalty',
			value: 0.75,
			type: 'number',
		},
		{
			id: 'presence_penalty',
			name: 'Presence Penalty',
			value: 0.0,
			type: 'number',
		},
	],
	description: 'Cohere Prompt Mixer connector to run Cohere language models',
	author: 'Prompt Mixer',
	iconBase64:
		'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzMyMF80ODc4OSIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+CjxwYXRoIGQ9Ik0xNC40IDEuNTk5OThIMS42MDAwMVYxNC40SDE0LjRWMS41OTk5OFoiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8zMjBfNDg3ODkpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ljc0NyA5LjIyMTE3QzYuMDkxNTMgOS4yMjExNyA2Ljc3Njg1IDkuMjAyMjcgNy43MjQxNCA4LjgxMjI1QzguODI4MDQgOC4zNTc3NiAxMS4wMjQzIDcuNTMyNzIgMTIuNjA4NiA2LjY4NTI3QzEzLjcxNjYgNi4wOTI1MyAxNC4yMDI0IDUuMzA4NjEgMTQuMjAyNCA0LjI1MjkyQzE0LjIwMjQgMi43ODc3NSAxMy4wMTQ2IDEuNTk5OTggMTEuNTQ5NCAxLjU5OTk4SDUuNDEwNkMzLjMwNjA3IDEuNTk5OTggMS42MDAwMSAzLjMwNjAzIDEuNjAwMDEgNS40MTA1N0MxLjYwMDAxIDcuNTE1MTEgMy4xOTczOCA5LjIyMTE3IDUuNzQ3IDkuMjIxMTdaIiBmaWxsPSIjNkY3MzdBIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi43ODU5NSAxMS44NDUzQzYuNzg1OTUgMTAuODEzNyA3LjQwNyA5Ljg4MzU1IDguMzU5OCA5LjQ4ODFMMTAuMjkzMSA4LjY4NTc3QzEyLjI0ODUgNy44NzQyMSAxNC40MDA5IDkuMzExMjQgMTQuNDAwOSAxMS40Mjg1QzE0LjQwMDkgMTMuMDY4OCAxMy4wNzA5IDE0LjM5ODQgMTEuNDMwNSAxNC4zOThMOS4zMzc0MyAxNC4zOTc0QzcuOTI4MTYgMTQuMzk3MSA2Ljc4NTk1IDEzLjI1NDUgNi43ODU5NSAxMS44NDUzWiIgZmlsbD0iIzZGNzM3QSIvPgo8cGF0aCBkPSJNMy43OTY3IDkuNzIzNTFDMi41ODM1MiA5LjcyMzUxIDEuNjAwMDEgMTAuNzA2OSAxLjYwMDAxIDExLjkyMDFWMTIuMjA0N0MxLjYwMDAxIDEzLjQxNzggMi41ODM0OCAxNC40MDEzIDMuNzk2NjcgMTQuNDAxM0M1LjAwOTg1IDE0LjQwMTMgNS45OTMzNyAxMy40MTc4IDUuOTkzMzcgMTIuMjA0N1YxMS45MjAxQzUuOTkzMzcgMTAuNzA2OSA1LjAwOTg5IDkuNzIzNTEgMy43OTY3IDkuNzIzNTFaIiBmaWxsPSIjNkY3MzdBIi8+CjwvZz4KPC9zdmc+Cg==',
};
