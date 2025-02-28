# Schema API Server

## Overview
This server is built using Express.js and leverages the OpenAI API to generate JSON objects based on user-defined schemas. It allows users to send a JSON schema to the server, which then uses the OpenAI model to generate a JSON object that strictly follows the provided schema.

## Features
- **Schema-based JSON Generation**: Users can define a schema, and the server will generate a JSON object that adheres to this schema.
- **Express.js Framework**: The server is built using the Express.js framework, making it lightweight and easy to extend.
- **CORS Enabled**: Cross-Origin Resource Sharing (CORS) is enabled, allowing the server to handle requests from different origins.
- **Environment Configuration**: The server uses dotenv to manage environment variables, ensuring sensitive data like API keys are securely managed.

## Endpoints

### `POST /generate`
**Description**: Generates a JSON object based on the provided schema.

**Request Body**: A JSON object containing the schema.

**Example Request:**

```json
{
  "schema": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "age": { "type": "integer" }
    },
    "required": ["name", "age"]
  }
}
```

**Example Response:**

```json
{
  "data": { "name": "John Doe", "age": 30 }
}
```

## Setup and Running the Server

### Clone the repository:
```sh
git clone https://github.com/husseinTalal2/schema-api.git
```

### Navigate to the project directory:
```sh
cd schema-api
```

### Install dependencies:
```sh
npm install
```

### Create a `.env` file and add your OpenAI API key:
```sh
OPENAI_API_KEY=your_openai_api_key
```

### Start the server:
```sh
node index.js
```

The server will be running on `http://localhost:3000`.

## Dependencies
- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `openai`: OpenAI API client library
- `dotenv`: Module to load environment variables from a `.env` file
- `cors`: Middleware to enable CORS

## Error Handling
The server includes basic error handling to manage cases where the schema is not provided or if there's an issue with generating the JSON object. Appropriate HTTP status codes and error messages are returned to the client.

## Conclusion
This server provides a simple yet powerful way to generate JSON objects based on user-defined schemas using OpenAI's capabilities. It can be easily integrated into various applications that require dynamic JSON generation.

