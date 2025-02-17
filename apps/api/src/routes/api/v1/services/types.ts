import { OnlyId } from "../../../../types";

export interface SaveServiceType extends OnlyId {
    Body: {
        type: string
    }
}
export interface SaveServiceVersion extends OnlyId {
    Body: {
        version: string
    }
}
export interface SaveServiceDestination extends OnlyId {
    Body: {
        destinationId: string
    }
}
export interface GetServiceLogs extends OnlyId {
    Querystring: {
        since: number
    }
}
export interface SaveServiceSettings extends OnlyId {
    Body: {
        dualCerts: boolean
    }
}
export interface CheckService extends OnlyId {
    Body: {
        fqdn: string,
        exposePort: number,
        otherFqdns: Array<string>
    }
}
export interface SaveService extends OnlyId {
    Body: {
        name: string,
        fqdn: string,
        exposePort: number,
        type: string
    }
}
export interface SaveServiceSecret extends OnlyId {
    Body: {
        name: string,
        value: string,
        isNew: string,
    }
}
export interface DeleteServiceSecret extends OnlyId {
    Body: {
        name: string,
    }
}
export interface SaveServiceStorage extends OnlyId {
    Body: {
        path: string,
        newStorage: string,
        storageId: string,
    }
}

export interface DeleteServiceStorage extends OnlyId {
    Body: {
        path: string,
    }
}
export interface ServiceStartStop {
    Params: {
        id?: string,
        type: string,
    }
}
export interface SetWordpressSettings extends OnlyId {
    Body: {
        ownMysql: boolean
    }
}
export interface ActivateWordpressFtp extends OnlyId {
    Body: {
        ftpEnabled: boolean
    }
}




