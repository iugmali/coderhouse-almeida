import type {NextRequest} from "next/server";
import {handlers} from "@/lib/auth";

const { GET: AuthGET, POST } = handlers;
export { POST };

// Boilerplate para inicialização avançada in Route Handlers
export async function GET(request: NextRequest) {
  // Do something with request
  // Do something with response
  return await AuthGET(request);
}
