import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const SERVICE_ID = "service_08tlqwo";
const TEMPLATE_ID = "template_r4qn6gh";
const PUBLIC_KEY = "5XOxypZIQ-eEg2xVl";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    to_name: "Felix",
                    from_email: formData.email,
                    to_email: "f.zintel1999@gmail.com",
                    message: formData.message,
                },
                PUBLIC_KEY
            );
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            showAlertMessage("success", "Deine Nachricht wurde gesendet.");
        } catch (error) {
            setIsLoading(false);
            const msg = error?.text || error?.message || "Es ist ein Fehler aufgetreten.";
            showAlertMessage("danger", msg);
        }
    };

    return (
        <section id="contact" className="relative flex items-center c-space section-spacing">
            <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
            {showAlert && <Alert type={alertType} text={alertMessage} />}

            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Lass uns reden!</h2>
                    <p className="font-normal text-neutral-400">
                        Na? Lust bekommen, gemeinsam an spannenden Projekten zu arbeiten? Ich freue mich auf deine Nachricht!
                    </p>
                </div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="feild-label">Voller Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="Max Mustermann"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="feild-label">E-Mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="max-mustermann@beispiel.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="message" className="feild-label">Nachricht</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="field-input field-input-focus"
                            placeholder="Deine Nachricht…"
                            autoComplete="off"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Sende…" : "Senden"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
