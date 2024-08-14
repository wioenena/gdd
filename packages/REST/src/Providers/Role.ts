import { API_URL } from "../constants.ts";
import { BaseProvider } from "./Base.ts";

export class RoleProvider extends BaseProvider {
    async addRoleToMember(serverId: string, userId: string, roleId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}/roles/${roleId}`,
            {
                method: "PUT",
            },
        );

        return response.ok;
    }

    async removeRoleFromMember(
        serverId: string,
        userId: string,
        roleId: string,
    ) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}/roles/${roleId}`,
            {
                method: "DELETE",
            },
        );

        return response.ok;
    }

    async getMemberRoles(serverId: string, userId: string) {
        const response = await this.rest.makeRequest(
            `${API_URL}/servers/${serverId}/members/${userId}/roles`,
        );

        return response.json();
    }
}
