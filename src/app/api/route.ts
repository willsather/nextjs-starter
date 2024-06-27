import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("Hello World", { status: 200 });
}

export async function POST() {
  return NextResponse.json("Hello World - POST", { status: 201 });
}
