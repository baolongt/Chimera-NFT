import { Injectable } from '@nestjs/common';
import fs from 'fs';
import axios from 'axios';

@Injectable()
export class GenerateImageService {
  async generate(prompt: string) {
    const data = {
      prompt,
      output_format: 'jpeg',
    };

    console.log('Generating image with prompt, ', data);

    const response = await axios.post(
      `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
      axios.toFormData(data, new FormData()),
      {
        validateStatus: undefined,
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer sk-XbtKQOxQ7j8g3wgEsF7wS5yjSVLXjMwEPKEfIk5QwNeakh2u`,
          Accept: 'image/*',
        },
      },
    );

    if (response.status === 200) {
      fs.writeFileSync(
        `./assets/${Date.now()}.jpeg`,
        Buffer.from(response.data),
      );
    } else {
      throw new Error(`${response.status}: ${response.data.toString()}`);
    }
  }
}
