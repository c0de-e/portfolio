"use server";

import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/smtp-transport';
import { EMAIL_NAME, SUBJECT_NAME, MESSAGE_NAME, TURNSTILE_RESPONSE } from './Constants';

// Server Action
export async function sendContact(prevState: boolean, formData: FormData): Promise<boolean> {
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: formData.get(TURNSTILE_RESPONSE)?.toString()
        })
    });

    const data: SiteVerifyRes = await res.json();
    if (!data.success) return false;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    const from_email = formData.get(EMAIL_NAME)?.toString();
    const mailOptions: MailOptions = {
        from: from_email,
        to: process.env.GMAIL_ADDRESS,
        subject: formData.get(SUBJECT_NAME)?.toString(),
        html: `<h3>From: ${from_email}</h3><br/>${formData.get(MESSAGE_NAME)?.toString()}`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) { console.log(err); return false; }
        else console.log(info);
    });
    return true;
}


interface SiteVerifyRes {
    action?: string;
    cdata?: string;
    challenge_ts?: Date;
    "error-codes": Array<any>;
    hostname?: string;
    metadata?: { interactive: boolean; };
    messages?: Array<any>;
    success: boolean;
}