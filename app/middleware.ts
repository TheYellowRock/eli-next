import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const variant = url.pathname.split("/")[2]; // Extract `variant` from the path

  // Validate `variant` parameter
  if (!["men", "women"].includes(variant)) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to home for invalid variants
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/collections/:variant*", // Apply middleware only for `/collections/[variant]` routes
};
