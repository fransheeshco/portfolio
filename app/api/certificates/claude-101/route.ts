import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const certificatePath = path.join(process.cwd(), "assets", "Claude-101.pdf");
  const certificate = await readFile(certificatePath);

  return new Response(certificate, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Claude-101.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
