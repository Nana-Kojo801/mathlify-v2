import type { DataModel } from "convex/_generated/dataModel";

export type User = DataModel["users"]["document"]
export type Preset = DataModel["presets"]["document"]

export type GameType  = DataModel["presets"]["document"]["type"]

export type FriendRequest = DataModel["friendRequests"]["document"]

export type FriendMessage = DataModel["friendMessages"]["document"] & {
    sender: User
    receiver: User
}

export type CasualGameDifficulty = {
    range: {
        min: number
        max: number
    }
    quantity: {
        min: number;
        max: number;
    }
    duration: number;
    timeInterval: number
}

export type SpeedSolveDifficulty = {
    range: {
        min: number
        max: number
    }
    quantity: {
        min: number;
        max: number;
    }
    duration: number;
}