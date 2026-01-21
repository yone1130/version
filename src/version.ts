/**!
 * 
 * Version
 * 
 * Copyright (C) 2025 よね/Yone
 * Licensed under the MIT License.
 * 
 * https://github.com/yone1130/version
 * 
 */

export class Version {
    constructor(
        major: number,
        minor: number,
        patch: number,
        level: VersionLevel
    ) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.level = level;
    }

    major: number;
    minor: number;
    patch: number;
    level: VersionLevel;

    get string(): String {
        switch (this.level) {
            case VersionLevel.stable:
                return `${this.major}.${this.minor}.${this.patch}`;

            case VersionLevel.beta:
                return `${this.major}.${this.minor}.${this.patch} (beta)`;

            case VersionLevel.dev:
                return `${this.major}.${this.minor}.${this.patch} (dev)`;

            default:
                return `${this.major}.${this.minor}.${this.patch}`;
        }
    }
}

export enum VersionLevel {
    stable,
    beta,
    dev,
}
