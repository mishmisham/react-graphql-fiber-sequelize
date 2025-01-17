import { gql } from 'apollo-server-express';

export const userType = gql`
    type User {
        id: Int
        name: String
        email: String
        password: String
    }

    type UserPublic {
        id: Int
        name: String
    }

    type LoginDataResp {
        data: LoginResponse
        errors: ErrorResp
    }

    type LogoutResp {
        result: Boolean
    }

    input LogoutInput {
        id: ID!
    }

    extend type Mutation {
        register(input: RegisterInput): RegisterDataResponse
        login(input: LoginInput): LoginDataResp
        logout(input: LogoutInput): LogoutResp
        reAuthorize(input: ReAuthByTokenInput): LoginDataResp
        refreshTokens(input: RefreshTokensInput): RefreshTokensResponse
    }

    extend type Query {
        getAllUsers: [UserPublic]
        getUserByID(id: Int): UserPublic
        getUserByEmail(email: String): UserPublic
    }

    type RegisterResponse {
        id: Int
        name: String
        email: String
    }

    type RegisterDataResponse {
        data: RegisterResponse
        errors: ErrorResp
    }

    type RefreshTokensResponse {
       data: RefreshTokensResponseData
       errors: ErrorResp
    }

    type RefreshTokensResponseData {
        refreshToken: String
        accessToken: String
    }

    input RefreshTokensInput {
        refresh_token: String
    }

    input RegisterInput {
        name: String
        email: String
        password: String
    }
    
    input ReAuthByTokenInput {
        token: String
        mode: String
    }

    input LoginInput {
        email: String
        password: String
    }

    input UserAuthData {
        id: Int
        token: String
    }

    type ErrorResp {
        message: String
        errors: [String]
    }


    type LoginResponse {
        id: Int
        name: String
        email: String
        refreshToken: String
        accessToken: String
    }
`;
