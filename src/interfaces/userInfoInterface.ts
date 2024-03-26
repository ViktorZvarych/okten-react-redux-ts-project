export interface IUserInfo {
    avatar:        Avatar;
    name:          string;
    include_adult: boolean;
    username:      string;
}

export interface Avatar {
    gravatar: Gravatar;
}

export interface Gravatar {
    hash: string;
}