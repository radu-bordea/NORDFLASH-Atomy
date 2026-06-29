"use server";

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload) {
  // TODO: implement with Resend
  console.log("Contact form submission:", data);
  return { success: true };
}