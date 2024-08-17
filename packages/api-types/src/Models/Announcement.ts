import { MentionsModel } from "./Channel.ts";

export type AnnouncementModel = {
    id: string;
    serverId: string;
    groupId: string;
    channelId: string;
    createdAt: string;
    createdBy: string;
    content: string;
    mentions?: MentionsModel;
    title: string;
};

export type CreateAnnouncementPathParams = {
    channelId: string;
};

export type CreateAnnouncementJSONParams = Pick<
    AnnouncementModel,
    "title" | "content"
>;

export type CreateAnnouncementResponse = {
    announcement: AnnouncementModel;
};

export type GetAnnouncementsPathParams = {
    channelId: string;
};

export type GetAnnouncementsQueryStringParams = {
    before?: string;
    limit?: number;
};

export type GetAnnouncementsResponse = {
    announcements: AnnouncementModel[];
};

export type GetAnnouncementPathParams = {
    channelId: string;
    announcementId: string;
};

export type GetAnnouncementResponse = {
    announcement: AnnouncementModel;
};

export type UpdateAnnouncementPathParams = {
    channelId: string;
    announcementId: string;
};

export type UpdateAnnouncementJSONParams = Partial<
    Pick<AnnouncementModel, "title" | "content">
>;

export type UpdateAnnouncementResponse = {
    announcement: AnnouncementModel;
};

export type DeleteAnnouncementPathParams = {
    channelId: string;
    announcementId: string;
};

export type AnnouncementCommentModel = {
    id: number;
    content: string;
    createdAt: string;
    updatedAt?: string;
    createdBy: string;
    channelId: string;
    announcementId: string;
    mentions?: MentionsModel;
};

export type CreateAnnouncementCommentPathParams = {
    channelId: string;
    announcementId: string;
};

export type CreateAnnouncementCommentJSONParams = Pick<
    AnnouncementCommentModel,
    "content"
>;

export type CreateAnnouncementCommentResponse = {
    announcementComment: AnnouncementCommentModel;
};

export type GetAnnouncementCommentsPathParams = {
    channelId: string;
    announcementId: string;
};

export type GetAnnouncementCommentsResponse = {
    announcementComments: AnnouncementCommentModel[];
};

export type GetAnnouncementCommentPathParams = {
    channelId: string;
    announcementId: string;
    announcementCommentId: number;
};

export type GetAnnouncementCommentResponse = {
    announcementComment: AnnouncementCommentModel;
};

export type UpdateAnnouncementCommentPathParams = {
    channelId: string;
    announcementId: string;
    announcementCommentId: number;
};

export type UpdateAnnouncementCommentJSONParams = Pick<
    AnnouncementCommentModel,
    "content"
>;

export type UpdateAnnouncementCommentResponse = {
    announcementComment: AnnouncementCommentModel;
};

export type DeleteAnnouncementCommentPathParams = {
    channelId: string;
    announcementId: string;
    announcementCommentId: number;
};
