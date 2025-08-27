import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { name, email, website, message } = await req.json();

		await resend.emails.send({
			from: "Portfolio Contact Bùi Hoàng Huy <onboarding@resend.dev>",
			to: "huy.buihoang2301@gmail.com",
			subject: `New Contact from ${name}`,
			html: `
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}</p>
                    <p><strong>Website: </strong>${website || "N/A"}</p>
                    <p><strong>Message: </strong>${message}</p>
            `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ success: false, error }, { status: 500 });
	}
}
