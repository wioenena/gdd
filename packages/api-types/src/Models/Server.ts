export type ServerModel = {
    id: string;
    ownerId: string;
    type?: ServerModelType;
    name: string;
    url?: string;
    about?: string;
    avatar?: string;
    banner?: string;
    timezone?: string;
    isVerified?: boolean;
    defaultChannelId?: string; // The default channel id(uuid) for the server
    createdAt: string;
};

export type ServerModelType =
    | "team"
    | "organization"
    | "community"
    | "clan"
    | "guild"
    | "friends"
    | "streaming"
    | "other";

export const enum ServerType {
    Team = "team",
    Organization = "organization",
    Community = "community",
    Clan = "clan",
    Guild = "guild",
    Friends = "friends",
    Streaming = "streaming",
    Other = "other",
}
