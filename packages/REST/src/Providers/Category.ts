import { API_URL } from "../constants.ts";
import { BaseProvider } from "./Base.ts";

export class CategoryProvider extends BaseProvider {
    async create(serverId: string, data: ICreateCategoryJSONParameters) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/categories`,
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );

        return response.json();
    }

    async get(serverId: string, categoryId: number) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/categories/${categoryId}`,
        );

        return response.json();
    }

    async update(
        serverId: string,
        categoryId: number,
        data: IUpdateCategoryJSONParameters,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/categories/${categoryId}`,
            {
                method: "PATCH",
                body: JSON.stringify(data),
            },
        );
        return response.json();
    }

    async delete(serverId: string, categoryId: number) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/categories/${categoryId}`,
            {
                method: "DELETE",
            },
        );
        return response.ok;
    }
}

export interface ICreateCategoryJSONParameters {
    name: string;
    groupId?: string;
}

export interface IUpdateCategoryJSONParameters {
    name?: string;
    priority?: number;
}
