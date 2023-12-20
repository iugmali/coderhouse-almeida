import type { NextRequest } from "next/server";
import {handlers} from "@/lib/auth";

const { GET: AuthGET, POST } = handlers;
export { POST };

// Showcasing advanced initialization in Route Handlers
export async function GET(request: NextRequest) {
  // Do something with request
  const response = await AuthGET(request);
  // Do something with response
  return response;
}
