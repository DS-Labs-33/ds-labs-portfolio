import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Proxy the request from the server to bypass client-side adblockers
    const res = await fetch("https://formsubmit.co/ajax/contactdslabs@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...body,
        _captcha: "false" // Disable captcha for AJAX
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await res.text();
      console.error("FormSubmit Error:", errorText);
      return NextResponse.json({ error: "Failed to send message via upstream." }, { status: 400 });
    }
  } catch (error) {
    console.error("Server Fetch Error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
