"use server";

export async function submitContactForm(formData: FormData) {
    const access_key = "2a7ef40a-b93c-44a0-a936-ddf7fe33e7a4"; // Ideally this should be in process.env

    const data = {
        access_key,
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
            return { success: true, message: "Message sent successfully!" };
        } else {
            return { success: false, message: result.message || "Something went wrong." };
        }
    } catch (error) {
        return { success: false, message: "Failed to send message." };
    }
}
