import { API_URL } from "../constants.ts";
import { BaseProvider } from "./Base.ts";

export class ServerProvider extends BaseProvider {
    async get(serverId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}`,
        );
        return response.json();
    }
}
