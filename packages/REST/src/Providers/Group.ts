import { API_URL } from "../constants.ts";
import { BaseProvider } from "./Base.ts";

export class GroupProvider extends BaseProvider {
    async create(serverId: string, data: ICreateGroupJSONParameters) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/groups`,
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );
        return response.json();
    }

    async groups(serverId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/groups`,
        );
        return response.json();
    }

    async get(serverId: string, groupId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/groups/${groupId}`,
        );
        return response.json();
    }

    async update(
        serverId: string,
        groupId: string,
        data: IUpdateGroupJSONParameters,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/groups/${groupId}`,
            {
                method: "PATCH",
                body: JSON.stringify(data),
            },
        );
        return response.json();
    }

    async delete(serverId: string, groupId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/groups/${groupId}`,
            {
                method: "DELETE",
            },
        );
        return response.ok;
    }

    async addMember(groupId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/groups/${groupId}/members/${userId}`,
            {
                method: "PUT",
            },
        );

        return response.ok;
    }

    async removeMember(groupId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/groups/${groupId}/members/${userId}`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }
}

export interface ICreateGroupJSONParameters {
    name: string;
    description?: string;
    emoteId?: string;
    isPublic?: boolean;
}

export interface IUpdateGroupJSONParameters {
    name?: string;
    description?: string;
    emoteId?: string;
    isPublic?: string;
}
