import { API_URL } from "../constants.ts";
import { BaseProvider } from "./Base.ts";

export class ServerProvider extends BaseProvider {
    get(serverId: string) {
        return this.rest.makeRequest(`${API_URL}/servers/${serverId}`);
    }
}
