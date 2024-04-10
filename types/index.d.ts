import page from "page"

declare interface PageContext {
    page: typeof page,
    user?: {
        objectId: string,
        username: string,
        sessionToken: string
    }
}

declare interface Window {
    api: {
        login: (username: string, password: string) => Promise<void>
    }
}