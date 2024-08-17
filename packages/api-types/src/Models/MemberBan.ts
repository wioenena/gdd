export type ServerMemberBanModel = {
    reason?: string;
    createdBy: string;
    createdAt: string;
};

export type CreateServerBanPathParams = {
    serverId: string;
    userId: string | "@me";
};

export type CreateServerBanJSONParams = {
    reason?: string;
};

export type CreateServerBanResponse = {
    serverMemberBan: ServerMemberBanModel;
};

export type GetServerBanPathParams = {
    serverId: string;
    userId: string | "@me";
};

export type GetServerBanResponse = {
    serverMemberBan: ServerMemberBanModel;
};

export type DeleteServerBanPathParams = {
    serverId: string;
    userId: string | "@me";
};

export type GetServerBansPathParams = {
    serverId: string;
};

export type GetServerBansResponse = {
    serverMemberBans: ServerMemberBanModel[];
};
