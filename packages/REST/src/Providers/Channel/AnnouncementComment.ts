import { API_URL } from "../../constants.ts";
import { BaseProvider } from "../Base.ts";

export class AnnouncementCommentProvider extends BaseProvider {
    async create(
        channelId: string,
        announcementId: string,
        data: ICreateAnnouncementCommentJSONParameters,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}/comments`,
            { method: "POST", body: JSON.stringify(data) },
        );

        return response.json();
    }

    async comments(channelId: string, announcementId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}/comments`,
        );

        return response.json();
    }

    async get(channelId: string, announcementId: string, commentId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}/comments/${commentId}`,
        );

        return response.json();
    }

    async update(
        channelId: string,
        announcementId: string,
        commentId: string,
        data: IUpdateAnnouncementCommentJSONParameters,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}/comments/${commentId}`,
            { method: "PATCH", body: JSON.stringify(data) },
        );

        return response.json();
    }

    async delete(
        channelId: string,
        announcementId: string,
        commentId: string,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/channels/${channelId}/announcements/${announcementId}/comments/${commentId}`,
            { method: "DELETE" },
        );

        return response.json();
    }
}

export interface ICreateAnnouncementCommentJSONParameters {
    content: string;
}

export interface IUpdateAnnouncementCommentJSONParameters {
    content: string;
}
