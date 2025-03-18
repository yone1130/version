/**!
 * 
 * Version
 * 
 * Copyright (C) 2025 よね/Yone
 * 
 */

export class Version {
    major: number;
    minor: number;
    patch: number;
    level: string;

    constructor(
        major: number,
        minor: number,
        patch: number,
        level: string
    ) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.level = level;
    }


    get string(): String {
        switch (this.level) {
            case Version.levels.stable:
                return `${this.major}.${this.minor}.${this.patch}`;

            case Version.levels.beta:
                return `${this.major}.${this.minor}.${this.patch} (beta)`;

            case Version.levels.dev:
                return `${this.major}.${this.minor}.${this.patch} (dev)`;

            default:
                return `${this.major}.${this.minor}.${this.patch}`;
        }
    }


    static levels = {
        stable: "stable",
        beta: "beta",
        dev: "dev",
    };
}
