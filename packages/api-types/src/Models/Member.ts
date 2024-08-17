export type ServerMemberModel = {
    user: UserModel;
    roleIds: number[];
    nickname?: string;
    joinedAt: string;
    isOwner?: boolean;
};

export type ServerMemberSummaryModel = {
    user: UserSummaryModel;
    roleIds: number[];
};

export type ServerMemberPermissionsModel = {
    permissions: string[];
};

export type UpdateMemberNicknamePathParams = {
    serverId: string;
    userId: string | "@me";
};

export type UpdateMemberNicknameJSONParams = Required<
    Pick<
        ServerMemberModel,
        "nickname"
    >
>;

export type DeleteMemberNicknamePathParams = {
    serverId: string;
    userId: string | "@me";
};

export type GetServerMemberPathParams = {
    serverId: string;
    userId: string | "@me";
};

export type GetServerMemberResponse = {
    member: ServerMemberModel;
};

export type KickServerMemberPathParams = {
    serverId: string;
    userId: string | "@me";
};

export type GetMembersPathParams = {
    serverId: string;
};

export type GetMembersResponse = {
    members: ServerMemberSummaryModel[];
};

export type AddMemberToGroupPathParams = {
    groupId: string;
    userId: string | "@me";
};

export type RemoveMemberFromGroupPathParams = {
    groupId: string;
    userId: string | "@me";
};

export type AssignRoleToMemberPathParams = {
    serverId: string;
    userId: string | "@me";
    roleId: number;
};

export type RemoveRoleFromMemberPathParams = {
    serverId: string;
    userId: string | "@me";
    roleId: number;
};

export type GetMemberRolesPathParams = {
    serverId: string;
    userId: string | "@me";
};

export type GetMemberRolesResponse = {
    roleIds: number[];
};
