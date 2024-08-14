import { RateLimitError } from "./Errors/RateLimitError.ts";
import { RequestError } from "./Errors/RequestError.ts";
import { ServerProvider } from "./Providers/Server.ts";

export class REST {
    public readonly token: string;
    public readonly server: ServerProvider;

    public constructor(token: string) {
        this.token = token;
        this.server = new ServerProvider(this);
    }

    public createRequest(input: RequestInfo | URL, init?: RequestInit) {
        init ??= {};
        init.method ??= "GET";
        init.headers ??= {};
        (init.headers as Record<string, string>)["Authorization"] =
            `Bearer ${this.token}`;

        return new Request(input, init);
    }

    public async makeRequest(
        input: RequestInfo | URL,
        init?: RequestInit,
    ): Promise<unknown> {
        const request = this.createRequest(input, init);
        const response = await fetch(request);

        if (response.status === 429) { // Rate-Limit
            const retryAfter = response.headers.get("Retry-After");
            if (retryAfter) {
                await wait(parseInt(retryAfter) * 1000);
                return this.makeRequest(input, init);
            } else {
                throw new RateLimitError(response.statusText);
            }
        }

        if (response.ok) return response.json();
        else throw new RequestError(response.statusText);
    }
}

// TODO: Move to gdd-utils package.
function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
