import type { MentionsModel } from "./Channel.ts";

export type CalendarEventModel = {
    id: number;
    serverId: string;
    groupId: string;
    channelId: string;
    name: string;
    description?: string;
    location?: string;
    url?: string;
    color?: number;
    repeats?: boolean;
    seriesId?: string;
    roleIds?: string[];
    rsvpDisabled?: boolean;
    isAllDay?: boolean;
    rsvpLimit?: number;
    autofillWaitlist?: boolean;
    startsAt: string;
    duration?: number;
    isPrivate?: boolean;
    mentions?: MentionsModel;
    createdAt: string;
    createdBy: string;
    cancellation?: CalendarEventCancellation;
};

export type CalendarEventCancellation = {
    description?: string;
    createdBy: string;
};

export type CalendarEventRsvpModel = {
    calendarEventId: number;
    channelId: string;
    serverId: string;
    userId: string;
    status: CalendarEventRsvpModelStatus;
    createdBy: string;
    createdAt: string;
    updatedBy?: string;
    updatedAt?: string;
};

export type CalendarEventRsvpModelStatus =
    | "going"
    | "maybe"
    | "declined"
    | "invited"
    | "waitlisted"
    | "not responded";

export type CreateCalendarEventPathParams = {
    channelId: string;
};

export type CreateCalendarEventJSONParams =
    & Pick<CalendarEventModel, "name">
    & Partial<
        Pick<
            CalendarEventModel,
            | "description"
            | "location"
            | "startsAt"
            | "url"
            | "color"
            | "isAllDay"
            | "rsvpDisabled"
            | "rsvpLimit"
            | "autofillWaitlist"
            | "duration"
            | "isPrivate"
            | "roleIds"
        >
    >
    & {
        repeatInfo?: RepeatInfoJSONParams;
    };

export type RepeatInfoJSONParams = {
    type: RepeatInfoType;
    every?: RepeatInfoEvery;
    endsAfterOccurrences?: number;
    endDate?: string;
    on?: string[]; // TODO: Look what kind of array it is
};

export type RepeatInfoEvery = {
    count: number;
    interval: RepeatInfoEveryInterval;
};

export type RepeatInfoType =
    | "once"
    | "everyDay"
    | "everyWeek"
    | "everyMonth"
    | "custom";

export type RepeatInfoEveryInterval = "day" | "month" | "year" | "week";

export type CreateCalendarEventResponse = {
    calendarEvent: CalendarEventModel;
};

export type GetCalendarEventsPathParams = {
    channelId: string;
};

export type GetCalendarEventsQueryStringParams = {
    before?: string;
    after?: string;
    limit?: number;
};

export type GetCalendarEventsResponse = {
    calendarEvents: CalendarEventModel[];
};

export type GetCalendarEventPathParams = {
    channelId: string;
    calendarEventId: number;
};

export type GetCalendarEventResponse = {
    calendarEvent: CalendarEventModel;
};

export type UpdateCalendarEventPathParams = {
    channelId: string;
    calendarEventId: number;
};

export type UpdateCalendarEventJSONParams = Partial<
    Pick<
        CalendarEventModel,
        | "name"
        | "description"
        | "location"
        | "startsAt"
        | "url"
        | "color"
        | "isAllDay"
        | "rsvpDisabled"
        | "rsvpLimit"
        | "autofillWaitlist"
        | "duration"
        | "isPrivate"
        | "roleIds"
    > & {
        cancellation: Partial<Pick<CalendarEventCancellation, "description">>;
    }
>;

export type UpdateCalendarEventResponse = {
    calendarEvent: CalendarEventModel;
};

export type DeleteCalendarEventPathParams = {
    channelId: string;
    calendarEventId: number;
};

export type GetCalendarEventRSVPPathParams = {
    channelId: string;
    calendarEventId: number;
    userId: string | "@me";
};

export type GetCalendarEventRSVPResponse = {
    calendarEventRsvp: CalendarEventRsvpModel;
};

export type UpdateCalendarEventRSVPPathParams = {
    channelId: string;
    calendarEventId: number;
    userId: string | "@me";
};

export type UpdateCalendarEventRSVPJSONParams = {
    status: "going" | "maybe" | "declined" | "invited";
};

export type UpdateCalendarEventRSVPResponse = {
    calendarEventRsvp: CalendarEventRsvpModel;
};

export type DeleteCalendarEventRSVPPathParams = {
    channelId: string;
    calendarEventId: number;
    userId: string | "@me";
};

export type GetCalendarEventRSVPSPathParams = {
    channelId: string;
    calendarEventId: number;
};

export type GetCalendarEventRSVPSResponse = {
    calendarEventRsvps: CalendarEventRsvpModel[];
};

export type CreateOrUpdateCalendarEventRSVPMultipleUsersPathParams = {
    channelId: string;
    calendarEventId: number;
};
export type CreateOrUpdateCalendarEventRSVPMultipleUsersJSONParams = {
    userIds: string[];
    status: "going" | "maybe" | "declined" | "invited";
};

export type CalendarEventCommentModel = {
    id: number;
    content: string;
    createdAt: string;
    updatedAt?: string;
    calendarEventId: number;
    channelId: string;
    createdBy: string;
    mentions?: MentionsModel;
};

export type CreateCalendarEventCommentPathParams = {
    channelId: string;
    calendarEventId: number;
};

export type CreateCalendarEventCommentJSONParams = Pick<
    CalendarEventCommentModel,
    "content"
>;

export type CreateCalendarEventCommentResponse = {
    calendarEventComment: CalendarEventCommentModel;
};

export type GetCalendarEventCommentsPathParams = {
    channelId: string;
    calendarEventId: number;
};

export type GetCalendarEventCommentsResponse = {
    calendarEventComments: CalendarEventCommentModel[];
};

export type GetCalendarEventCommentPathParams = {
    channelId: string;
    calendarEventId: number;
    calendarEventCommentId: number;
};

export type GetCalendarEventCommentResponse = {
    calendarEventComment: CalendarEventCommentModel;
};

export type UpdateCalendarEventCommentPathParams = {
    channelId: string;
    calendarEventId: number;
    calendarEventCommentId: number;
};

export type UpdateCalendarEventCommentJSONParams = Pick<
    CalendarEventCommentModel,
    "content"
>;

export type UpdateCalendarEventCommentResponse = {
    calendarEventComment: CalendarEventCommentModel;
};

export type DeleteCalendarEventCommentPathParams = {
    channelId: string;
    calendarEventId: number;
    calendarEventCommentId: number;
};

export type CalendarEventSeriesModel = {
    id: string;
    serverId: string;
    channelId: string;
};

export type UpdateCalendarEventSeriesPathParams = {
    channelId: string;
    calendarEventSeriesId: string;
};

export type UpdateCalendarEventSeriesJSONParams = Partial<
    Pick<
        CalendarEventModel,
        | "name"
        | "description"
        | "location"
        | "startsAt"
        | "url"
        | "color"
        | "isAllDay"
        | "rsvpDisabled"
        | "rsvpLimit"
        | "autofillWaitlist"
        | "duration"
        | "isPrivate"
        | "roleIds"
    > & { repeatInfo?: RepeatInfoJSONParams; calendarEventId?: number }
>;

export type DeleteCalendarEventSeriesPathParams = {
    channelId: string;
    calendarEventSeriesId: string;
};

export type DeleteCalendarEventSeriesJSONParams = {
    calendarEventId?: number;
};
