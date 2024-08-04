"use client";

import Script from 'next/script';
import { EMAIL_NAME, SUBJECT_NAME, MESSAGE_NAME } from './Constants';
import { HOME_SECTION } from "../header/Constants";
import { sendContact } from './Contact';
import { useFormState, useFormStatus } from 'react-dom';

export default function ContactForm() {
    const [ contactSuccess, formAction ] = useFormState(sendContact, false);

    return (
        <div className="hero min-h-screen">
            <Script src={"https://challenges.cloudflare.com/turnstile/v0/api.js"} async={true} defer={true} />
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text">Contact Me</h1>
                </div>
                <div className="card card-normal bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                    {!contactSuccess ?
                        <form className="card-body" action={formAction}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name={EMAIL_NAME} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name={SUBJECT_NAME} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name={MESSAGE_NAME} className="textarea textarea-bordered h-24" required />
                            </div>
                            <div className="form-control mt-6">
                                <div className="cf-turnstile" data-sitekey={process.env.TURNSTILE_SITE_KEY} />
                            </div>
                            <div className="form-control mt-6">
                                <Submit />
                            </div>
                        </form>
                        : <div className='card-body text-center'>
                            Thank you!
                            <div className='btn btn-primary' onClick={() => document.getElementById(HOME_SECTION)?.scrollIntoView({ behavior: "smooth", inline: "start" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M18 11l-6 -6" /><path d="M6 11l6 -6" /></svg>
                                Back To Top
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
}

// TODO - add feedback when submit fail
function Submit() {
    const { pending } = useFormStatus();
    return <button className={`btn btn-primary ${pending ? "btn-disabled" : ""}`} type="submit" disabled={pending}>Submit</button>;
}