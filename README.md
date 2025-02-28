# Schema-Based Data Generation API

## Overview
This API leverages AI to generate data based on a user-provided JSON schema. It uses OpenAI's language model (or alternative models) to generate structured JSON data that follows the given schema.

## Features
- Accepts a JSON schema as input.
- Generates a JSON response that strictly follows the provided schema.
- Uses AI models to produce realistic and meaningful data.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/schema-api.git
   cd schema-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   node src/index.js
   ```

## Usage

### Endpoint: `POST /generate`

#### Request Body:
```json
{
  "schema": {
    "name": "string",
    "age": "number",
    "email": "string"
  }
}
```

#### Response:
```json
{
  "data": {
    "name": "John Doe",
    "age": 25,
    "email": "johndoe@example.com"
  }
}
```

## Alternative AI Models
If you want to use free alternatives to OpenAI, modify the API to integrate models from:
- [Mistral AI](https://mistral.ai/)
- [Hugging Face](https://huggingface.co/inference-api)
- [Together AI](https://www.together.ai/)

## License
This project is open-source and licensed under the MIT License.

