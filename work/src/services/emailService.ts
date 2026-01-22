import emailjs from "@emailjs/browser";

export const initializeEmailJS = () => {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });
};

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      {
        to_email: import.meta.env.VITE_EMAIL_TO,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
    );

    return response;
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
};

export const sendQuoteEmail = async (formData: {
  name: string;
  email: string;
  idea: string;
  effect: string;
}) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      {
        to_email: import.meta.env.VITE_EMAIL_TO,
        from_email: formData.email,
        from_name: formData.name,
        idea: formData.idea,
        effect: formData.effect,
      },
    );

    return response;
  } catch (error) {
    console.error("Error sending quote email:", error);
    throw error;
  }
};
