export type MentionsObject = {
    users?: UserMention[];
    channels?: ChannelMention[];
    roles?: RoleMention[];
    everyone?: boolean;
    here?: boolean;
};

export type UserMention = {
    id: string;
};

export type ChannelMention = {
    id: string;
};

export type RoleMention = {
    id: number;
};

export type ServerChannelModel = {
    id: string;
    type: ServerChannelModelType;
    name: string;
    topic?: string;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    serverId: string;
    rootId?: string;
    parentId?: string;
    messageId?: string;
    categoryId?: number;
    groupId: string;
    visibility?: ServerChannelModelVisibility;
    archivedBy?: string;
    archivedAt?: string;
    priority?: number;
};

export type ServerChannelModelType =
    | "announcements"
    | "chat"
    | "calendar"
    | "forums"
    | "media"
    | "docs"
    | "voice"
    | "list"
    | "scheduling"
    | "stream";

export type ServerChannelModelVisibility = "private" | "public";

export type CreateChannelJSONParams =
    & Pick<ServerChannelModel, "name" | "type">
    & Partial<
        Pick<
            ServerChannelModel,
            | "topic"
            | "visibility"
            | "serverId"
            | "groupId"
            | "categoryId"
            | "parentId"
            | "messageId"
        >
    >;

export type CreateChannelResponseType = {
    channel: ServerChannelModel;
};

export type GetChannelPathParams = {
    channelId: string;
};

export type GetChannelResponseType = {
    channel: ServerChannelModel;
};

export type UpdateChannelPathParams = {
    channelId: string;
};

export type UpdateChannelJSONParams = Partial<
    Pick<ServerChannelModel, "name" | "topic" | "visibility" | "priority">
>;

export type UpdateChannelResponseType = {
    channel: ServerChannelModel;
};

export type DeleteChannelPathParams = {
    channelId: string;
};

export type ArchiveChannelPathParams = {
    channelId: string;
};

export type RestoreArchiveChannelPathParams = {
    channelId: string;
};
