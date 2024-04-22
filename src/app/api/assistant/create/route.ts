import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json({ test: "test" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
