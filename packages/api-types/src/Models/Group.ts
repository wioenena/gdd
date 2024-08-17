export type GroupModel = {
    id: string;
    serverId: string;
    name: string;
    description?: string;
    avatar?: string;
    isHome?: boolean;
    emoteId?: number;
    isPublic?: boolean;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    updatedBy?: string;
    archivedAt?: string;
    archivedBy?: string;
};

export type CreateGroupPathParams = {
    serverId: string;
};

export type CreateGroupJSONParams =
    & Pick<GroupModel, "name">
    & Partial<Pick<GroupModel, "description" | "emoteId" | "isPublic">>;

export type CreateGroupResponse = {
    group: GroupModel;
};

export type GetGroupsPathParams = {
    serverId: string;
};

export type GetGroupsResponse = {
    groups: GroupModel[];
};

export type GetGroupPathParams = {
    serverId: string;
    groupId: string;
};

export type GetGroupResponse = {
    group: GroupModel;
};

export type UpdateGroupPathParams = {
    serverId: string;
    groupId: string;
};

export type UpdateGroupJSONParams = Partial<
    Pick<GroupModel, "name" | "description" | "emoteId" | "isPublic">
>;

export type UpdateGroupResponse = { group: GroupModel };

export type DeleteGroupPathParams = {
    serverId: string;
    groupId: string;
};
