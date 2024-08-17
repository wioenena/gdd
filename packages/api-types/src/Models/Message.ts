import { MentionsModel } from "./Channel.ts";

export type ChatMessageModel = {
    id: string;
    type: ChatMessageModelType;
    serverId?: string;
    groupId?: string;
    channelId: string;
    content?: string;
    hiddenLinkPreviewUrls?: string[];
    embeds?: ChatEmbedModel[];
    replyMessageIds?: string[];
    isPrivate?: boolean;
    isSilent?: boolean;
    isPinned?: boolean;
    mentions?: MentionsModel;
    createdAt: string;
    createdBy: string;
    createdByWebhookId?: string;
    updatedAt?: string;
};

export type ChatMessageModelType = "default" | "system";

export const enum ChatMessageType {
    Default = "default",
    System = "system",
}

export type ChatEmbedModel = {
    title?: string;
    description?: string;
    url?: string;
    color?: number;
    footer?: ChatEmbedFooter;
    timestamp?: string;
    thumbnail?: ChatEmbedThumbnail;
    image?: ChatEmbedImage;
    author?: ChatEmbedAuthor;
    fields?: ChatEmbedField[];
};

export type ChatEmbedFooter = {
    icon_url?: string;
    text: string;
};

export type ChatEmbedThumbnail = {
    url?: string;
};

export type ChatEmbedImage = {
    url?: string;
};

export type ChatEmbedAuthor = {
    name?: string;
    url?: string;
    icon_url?: string;
};

export type ChatEmbedField = {
    name: string;
    value: string;
    inline?: boolean;
};

export type CreateChannelMessagePathParams = {
    channelId: string;
};

export type CreateChannelMessageJSONParams = Partial<
    Pick<
        ChatMessageModel,
        | "isPrivate"
        | "isSilent"
        | "replyMessageIds"
        | "content"
        | "hiddenLinkPreviewUrls"
        | "embeds"
    >
>;

export type CreateChannelMessageResponse = {
    message: ChatMessageModel;
};

export type GetChannelMessagesPathParams = {
    channelId: string;
};

export type GetChannelMessagesQueryStringParams = {
    before?: string;
    after?: string;
    limit?: number;
    includePrivate?: boolean;
};

export type GetChannelMessagesResponse = {
    messages: ChatMessageModel[];
};

export type GetChannelMessagePathParams = {
    channelId: string;
    messageId: string;
};

export type GetChannelMessageResponse = {
    message: ChatMessageModel;
};

export type UpdateChannelMessagePathParams = {
    channelId: string;
    messageId: string;
};

export type UpdateChannelMessageJSONParams = Partial<
    Pick<ChatMessageModel, "content" | "hiddenLinkPreviewUrls" | "embeds">
>;

export type UpdateChannelMessageResponse = {
    message:
        & Partial<ChatMessageModel>
        & Required<Pick<ChatMessageModel, "updatedAt">>;
};

export type DeleteChannelMessagePathParams = {
    channelId: string;
    messageId: string;
};

export type PinChannelMessagePathParams = {
    channelId: string;
    messageId: string;
};

export type UnPinChannelMessagePathParams = {
    channelId: string;
    messageId: string;
};
