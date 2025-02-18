export enum genderState {
    male = 'Homme',
    female = 'Femme',
    nonBinary = 'Non binaire'
}

export enum verfiState {
    noVerif = 'none',
    waitingFor = 'waiting',
    verified = 'verified'
}

export enum Side {
    left = 'Gauche',
    right = 'Droite',
    center = 'Centre'
}

export type Match = {
    id: number;
    name: string;
    mainImg: string;
    imgs: string[];
    age: number;
    gender: genderState;
    side: Side;
    new?: boolean;
    verification: verfiState;
    swipePrecision: SwipePrecision;
    chat?: ChatContent[]
}

export type ChatContent = {
    user: string;
    userID: number | undefined;
    message: string;
    createdAt: Date;
    isRead: boolean;
    isMine: boolean;
}

export type SwipePrecision = {
    total: number;
    accuracy: number;
}

export type Profile = {
    id: number;
    name: string;
    mainImg: string;
    imgs: string[];
    age: number;
    gender: genderState;
    side: Side;
    verification: verfiState;    
}

export type SearchedParams = {
    age: {min: number, max: number};
    gender: genderState[];
    isIncognito: boolean;
}

export type USER = {
    id: number;
    name: string;
    mainImg: string;
    imgs: string[];
    age: number;
    gender: genderState;
    side: Side;
    verification: verfiState;
    swipePrecision: SwipePrecision;
    userSwipePrecision: SwipePrecision;
    matchList: Match[];
    lookFor: SearchedParams;
    blockedUsers: number[];
}


