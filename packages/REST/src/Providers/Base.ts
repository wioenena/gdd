import type { REST } from "../REST.ts";

export class BaseProvider {
    protected readonly rest: REST;

    public constructor(rest: REST) {
        this.rest = rest;
    }
}
