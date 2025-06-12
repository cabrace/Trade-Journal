import { writeFile } from 'fs/promises';
import { v4 as uuid } from 'uuid';
import path from 'path';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  const file = data.get('file') as File;

  if (!file) return new Response("No file uploaded", { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${uuid()}.png`;
  const filepath = path.resolve('static/uploads', filename);

  await writeFile(filepath, buffer);

  return new Response(JSON.stringify({ url: `/uploads/${filename}` }), {
    headers: { 'Content-Type': 'application/json' }
  });
};

