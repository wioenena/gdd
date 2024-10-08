import { API_URL } from "../../constants.ts";
import { BaseProvider } from "../Base.ts";
import { AnnouncementProvider } from "./Announcement.ts";

export class ChannelProvider extends BaseProvider {
    public readonly announcement: AnnouncementProvider =
        new AnnouncementProvider(this.rest);

    async create(data: ICreateChannelJSONParameters) {
        // TODO: Validate data
        const response = await this.rest.makeRequest(`${API_URL}/channels`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        return response.json();
    }

    async get(channelId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}`,
        );
        return response.json();
    }

    async update(channelId: string, data: IUpdateChannelJSONParameters) {
        // TODO: Validate data
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}`,
            {
                method: "PATCH",
                body: JSON.stringify(data),
            },
        );

        return response.json();
    }

    async delete(channelId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }

    async archive(channelId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/archive`,
            {
                method: "PUT",
            },
        );

        return response.ok;
    }

    async restoreArchive(channelId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/archive`,
            {
                method: "DELETE",
            },
        );
        return response.ok;
    }
}

export interface ICreateChannelJSONParameters {
    name: string;
    topic?: string;
    visibility?: string;
    type: string;
    serverId?: string; // Optional if providing a groupId, categoryId, parentId or messageId
    groupId?: string; // Optional if providing a groupId, categoryId, parentId or messageId
    categoryId?: number; // Optional if providing a parentId or messageId
    parentId?: string; // Optional if providing a messageId
    messageId?: string; // Only applicable to "chat", "voice", and "stream" channels and indicates that this channel is a thread, if present
}

export interface IUpdateChannelJSONParameters {
    name?: string;
    topic?: string;
    visibility?: string;
    priority?: number;
}
