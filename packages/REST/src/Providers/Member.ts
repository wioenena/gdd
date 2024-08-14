import { API_URL } from "../constants.ts";
import { BaseProvider } from "./Base.ts";

export class MemberProvider extends BaseProvider {
    async updateNickname(serverId: string, userId: string, nickname: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}/nickname`,
            {
                method: "PUT",
                body: JSON.stringify({ nickname }),
            },
        );

        return response.json();
    }

    async deleteNickname(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}/nickname`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }

    async get(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}`,
        );

        return response.json();
    }

    async kick(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }

    async members(serverId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members`,
        );

        return response.json();
    }

    async banMember(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/bans/${userId}`,
            {
                method: "POST",
            },
        );

        return response.ok;
    }

    async getMemberBan(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/bans/${userId}`,
        );

        return response.json();
    }

    async unBanMember(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/bans/${userId}`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }
}
