/*!
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

    toString(): string {
        const targetVersion = `${this.major}.${this.minor}.${this.patch}`;

        switch (this.level) {
            case VersionLevel.stable:
                return targetVersion;

            case VersionLevel.rc:
                return `${targetVersion} (RC)`

            case VersionLevel.beta:
                return `${targetVersion} (Beta)`;

            case VersionLevel.alpha:
                return `${targetVersion} (Alpha)`;

            case VersionLevel.dev:
                return `${targetVersion} (Dev)`;

            default:
                return targetVersion;
        }
    }
}

export enum VersionLevel {
    stable,
    rc,
    beta,
    alpha,
    dev,
}
