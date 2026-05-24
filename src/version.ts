/*!
 * 
 * Version.js
 * 
 * Copyright (C) 2025 よね/Yone
 * Licensed under the MIT License.
 * 
 * https://github.com/yone1130/version-js
 * 
 */

export enum VersionLevel {
    stable = "stable",
    rc = "rc",
    beta = "beta",
    alpha = "alpha",
    dev = "dev",
}

const VERSION_REGEXP = /^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)(?:-(?<level>stable|rc|beta|alpha|dev)(?:\.(?<revision>\d+))?)?(?:\+(?<hash>[0-9a-zA-Z-]+))?$/;

const LEVEL_PRIORITY: Record<VersionLevel, number> = {
    [VersionLevel.stable]: 5,
    [VersionLevel.rc]: 4,
    [VersionLevel.beta]: 3,
    [VersionLevel.alpha]: 2,
    [VersionLevel.dev]: 1,
};

export class Version {
    get major(): number {
        return this.#major;
    }

    #major: number;

    get minor(): number {
        return this.#minor;
    }

    #minor: number;

    get patch(): number {
        return this.#patch;
    }

    #patch: number;

    get level(): VersionLevel {
        return this.#level;
    }

    #level: VersionLevel;

    get revision(): number | null {
        return this.#revision;
    }

    #revision: number | null;

    get hash(): string | null {
        return this.#hash;
    }

    #hash: string | null;

    #string?: string;

    constructor({
        major,
        minor,
        patch,
        level,
        revision,
        hash,
    }: {
        major: number,
        minor: number,
        patch: number,
        level?: VersionLevel | null,
        revision?: number | null,
        hash?: string | null,
    }) {
        const components = [major, minor, patch];

        if (components.some(c => !Number.isInteger(c) || c < 0x0 || Number.MAX_SAFE_INTEGER < c)) {
            throw new Error(`Invalid version: ${components.join(".")}`);
        }

        this.#major = major;
        this.#minor = minor;
        this.#patch = patch;
        this.#level = level ?? VersionLevel.stable;
        this.#revision = revision ?? null;
        this.#hash = hash ?? null;
    }

    static fromString(versionString: string) {
        if (versionString.length > 256) {
            throw new Error("Version string is too long.");
        }

        const match = VERSION_REGEXP.exec(versionString);

        if (!match?.groups) {
            throw new Error(`Invalid version string format: "${versionString}"`);
        }

        const { major, minor, patch, level, revision, hash } = match.groups;

        return new Version({
            major: parseInt(major, 10),
            minor: parseInt(minor, 10),
            patch: parseInt(patch, 10),
            level: (level as VersionLevel) ?? null,
            revision: revision ? parseInt(revision, 10) : null,
            hash: hash ?? null
        });
    }

    toString(): string {
        const string = this.#string;

        if (typeof string === "string") {
            return string;
        }

        const major = this.#major;
        const minor = this.#minor;
        const patch = this.#patch;
        const level = this.#level;
        const revision = this.#revision;
        const hash = this.#hash;
        const isStable = level === VersionLevel.stable;

        const targetVersion = `${major}.${minor}.${patch}`;

        if (isStable && revision === null && !hash) {
            this.#string = targetVersion
            return targetVersion;
        }

        let result = targetVersion;

        if (!isStable) {
            result += `-${level}`;
        }

        if (revision !== null) {
            result += `.${revision}`;
        }

        if (hash) {
            result += `+${hash}`;
        }

        this.#string = result;
        return result;
    }

    /**
     * Compares this version with the specified version.
     * 
     * @param otherVersion - The version to compare with this instance.
     * @returns Returns 1 if this version is newer, -1 if it is older, and 0 if they are equal.
     */
    compare(otherVersion: Version): number {
        /* Core version (major.minor.patch) */
        const thisMajor = this.#major;

        if (thisMajor !== otherVersion.major) {
            return thisMajor > otherVersion.major ? 1 : -1;
        }

        const thisMinor = this.#minor;

        if (thisMinor !== otherVersion.minor) {
            return thisMinor > otherVersion.minor ? 1 : -1;
        }

        const thisPatch = this.#patch;

        if (thisPatch !== otherVersion.patch) {
            return thisPatch > otherVersion.patch ? 1 : -1;
        }

        /* Release level */
        const thisLevel = this.#level;

        const thisPriority = LEVEL_PRIORITY[thisLevel];
        const otherPriority = LEVEL_PRIORITY[otherVersion.level];

        if (thisPriority !== otherPriority) {
            return thisPriority > otherPriority ? 1 : -1;
        }

        /* Revision */
        const thisRevision = this.#revision ?? -1;
        const otherRevision = otherVersion.revision ?? -1;

        if (thisRevision !== otherRevision) {
            return thisRevision > otherRevision ? 1 : -1;
        }

        /* Equal */
        return 0;
    }

    isNewerThan(otherVersion: Version): boolean {
        return this.compare(otherVersion) > 0;
    }

    isOlderThan(otherVersion: Version): boolean {
        return this.compare(otherVersion) < 0;
    }

    equals(otherVersion: Version, strict: boolean = false): boolean {
        if (this.compare(otherVersion) !== 0) {
            return false;
        }

        if (!strict) {
            return this.#hash === otherVersion.hash;
        }

        return true;
    }
}
