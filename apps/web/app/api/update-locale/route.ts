import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { locale } = await req.json();

    if (!locale) {
        return NextResponse.json({ message: "Locale is required" }, { status: 400 });
    }

    const cookie = `NEXT_LOCALE=${locale}; Path=/; HttpOnly; SameSite=Strict`;

    const response = NextResponse.json({ message: "Locale updated successfully" }, {
        headers: {
            'Set-Cookie': cookie,
            'x-my-locale': locale,
        },
    });

    return response;
}
