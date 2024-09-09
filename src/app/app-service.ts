export default class AppService {
    // get all environment variables mapped from .env at next config
    public apiUrl = process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL;

    protected async handleRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
        try {
            const response = await fetch(endpoint, options);
            if (!response.ok)  throw new Error(`Error ${options?.method || 'GET'}: ${response.status} ${response.statusText}`);
            return response.json();
        } catch (error) {
            console.error("Request failed: ", error);
            throw error;
        }
    }
}
