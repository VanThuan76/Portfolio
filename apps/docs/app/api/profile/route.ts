import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET() {
  const filePath = path.resolve("public", "data", "mockup.json");

  try {
    console.log(`Reading data from: ${filePath}`);
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    console.log("Data successfully read from file.");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading mock data:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}