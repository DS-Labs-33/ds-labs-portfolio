import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Send to Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "970b8905-e70d-47dd-bc0e-07b29f31b4ce",
        name: body.name,
        email: body.email,
        message: body.message,
        subject: body._subject || `New inquiry from ${body.name}`,
        from_name: "DS Labs Portfolio",
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await res.text();
      let errorMessage = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.message) errorMessage = errorJson.message;
      } catch (e) {
        // Not JSON
      }
      console.error("Web3Forms Error:", errorMessage);
      return NextResponse.json({ error: errorMessage || "Failed to send message via Web3Forms." }, { status: 400 });
    }
  } catch (error) {
    console.error("Server Fetch Error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
