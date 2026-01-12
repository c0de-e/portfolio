"use server";

import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/smtp-transport';
import { EMAIL_NAME, SUBJECT_NAME, MESSAGE_NAME, TURNSTILE_RESPONSE } from './Constants';

export async function sendContact(prevState: boolean, formData: FormData): Promise<boolean> {
    const token = formData.get(TURNSTILE_RESPONSE)?.toString();
    if (!token) return false;

    const verifyBody = new URLSearchParams();
    verifyBody.append('secret', process.env.TURNSTILE_SECRET_KEY as string);
    verifyBody.append('response', token);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: verifyBody
    });

    const data: SiteVerifyRes = await res.json();
    if (!data.success) return false;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    const from_email = formData.get(EMAIL_NAME)?.toString() || "";
    const mailOptions: MailOptions = {
        from: `Portfolio Mail <${from_email}>`,
        to: process.env.GMAIL_ADDRESS,
        subject: formData.get(SUBJECT_NAME)?.toString(),
        html: `<h3>From: ${from_email}</h3><br/>${formData.get(MESSAGE_NAME)?.toString()}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        console.error("Mail Error:", err);
        return false;
    }
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