import { API_URL } from "../../constants.ts";
import { BaseProvider } from "../Base.ts";
import { AnnouncementCommentProvider } from "./AnnouncementComment.ts";

export class AnnouncementProvider extends BaseProvider {
    public readonly comments = new AnnouncementCommentProvider(this.rest);

    async create(
        channelId: string,
        data: ICreateAnnouncementJSONParameters,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements`,
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );

        return response.json();
    }

    async announcements(channelId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements`,
        );

        return response.json();
    }

    async get(channelId: string, announcementId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}`,
        );

        return response.json();
    }

    async update(
        channelId: string,
        announcementId: string,
        data: IUpdateAnnouncementJSONParameters,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}`,
            {
                method: "PATCH",
                body: JSON.stringify(data),
            },
        );

        return response.json();
    }

    async delete(
        channelId: string,
        announcementId: string,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }
}

export interface ICreateAnnouncementJSONParameters {
    title: string;
    content: string;
}

export interface IUpdateAnnouncementJSONParameters {
    title?: string;
    content?: string;
}
