export const APP_CONFIG = {
    ninjasApiKey: import.meta.env.VITE_NINJAS_API_KEY,
    ninjasApiUrl: import.meta.env.VITE_NINJAS_API_URL ?? "https://api.api-ninjas.com/v1/holidays?country=PL",
    formSubmitUrl: import.meta.env.VITE_FORM_SUBMIT_URL ?? "/submit",
};