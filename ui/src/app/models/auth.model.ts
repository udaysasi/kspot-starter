export type ExternalAuthModel = {
    autoLogin: boolean;
    oauthRegistrations: Array<{
        id: string;
        name: string;
        provider: string;
        url: string;
    }>;
    samlRegistrations: Array<any>;
};
