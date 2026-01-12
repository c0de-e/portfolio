"use client";

import { EMAIL_NAME, SUBJECT_NAME, MESSAGE_NAME } from "./Constants";
import { HOME_SECTION } from "../header/Constants";
import { sendContact } from "./Contact";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import Turnstile from "react-turnstile";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  useRef,
} from "react";

export default function ContactForm() {
  const [ contactSuccess, formAction ] = useActionState(sendContact, false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="hero w-full">
      <div className="hero-content w-full flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text text-5xl font-bold">Contact Me</h1>
        </div>
        <div className="card card-normal w-full max-w-sm bg-base-300 shadow-2xl">
          {!contactSuccess ? (
            <form className="card-body" action={formAction}>
              <div className="form-control">
                <label className="label" htmlFor={EMAIL_NAME}>
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name={EMAIL_NAME}
                  id={EMAIL_NAME}
                  className="input input-bordered"
                  required
                  autoComplete="home email"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor={SUBJECT_NAME}>
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name={SUBJECT_NAME}
                  id={SUBJECT_NAME}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor={MESSAGE_NAME}>
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name={MESSAGE_NAME}
                  id={MESSAGE_NAME}
                  className="textarea textarea-bordered h-24"
                  required
                />
              </div>
              <div ref={turnstileRef} className="form-control mt-6 hidden">
                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                  onVerify={() => {
                    const current = turnstileRef.current as HTMLDivElement;
                    current.style.display = "none";
                    submitRef.current?.click();
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <Submit
                  ref={submitRef}
                  onClick={() => {
                    const current = turnstileRef.current as HTMLDivElement;
                    current.style.display = "block";
                  }}
                />
              </div>
            </form>
          ) : (
            <div className="card-body text-center">
              Thank you!
              <div
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById(HOME_SECTION)
                    ?.scrollIntoView({ behavior: "smooth", inline: "start" })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M18 11l-6 -6" />
                  <path d="M6 11l6 -6" />
                </svg>
                Back To Top
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// TODO - add feedback when submit fail
const Submit = forwardRef(function Submit(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  _ref,
) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`btn btn-secondary ${pending ? "btn-disabled" : ""}`}
      type="submit"
      disabled={pending}
      {...props}
    >
      Submit
    </button>
  );
});
