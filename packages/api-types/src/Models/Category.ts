export type CategoryModel = {
    id: number;
    serverId: string;
    groupId: string;
    createdAt: string;
    updatedAt?: string;
    name: string;
    priority?: number;
};

export type CreateCategoryPathParams = {
    serverId: string;
};

export type CreateCategoryJSONParams =
    & Pick<CategoryModel, "name">
    & Partial<Pick<CategoryModel, "groupId">>;

export type CreateCategoryResponse = {
    category: CategoryModel;
};

export type GetCategoryPathParams = {
    serverId: string;
    categoryId: number;
};

export type GetCategoryResponse = {
    category: CategoryModel;
};

export type UpdateCategoryPathParams = {
    serverId: string;
    categoryId: number;
};

export type UpdateCategoryJSONParams = Partial<
    Pick<CategoryModel, "name" | "priority">
>;

export type UpdateCategoryResponse = {
    category: CategoryModel;
};

export type DeleteCategoryPathParams = {
    serverId: string;
    categoryId: number;
};
