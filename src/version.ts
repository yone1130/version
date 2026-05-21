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
        this.#major = major;
        this.#minor = minor;
        this.#patch = patch;
        this.#level = level ?? VersionLevel.stable;
        this.#revision = revision ?? null;
        this.#hash = hash ?? null;
    }

    toString(): string {
        const major = this.major;
        const minor = this.minor;
        const patch = this.patch;
        const level = this.level;
        const revision = this.revision;
        const hash = this.hash;
        const isStable = level === VersionLevel.stable;
        
        const targetVersion = `${major}.${minor}.${patch}`;
        
        if (isStable && revision === null && !hash) {
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

        return result;
    }
}

export enum VersionLevel {
    stable = "stable",
    rc = "rc",
    beta = "beta",
    alpha = "alpha",
    dev = "dev",
}
