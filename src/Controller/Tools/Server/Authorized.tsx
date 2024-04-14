import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import { apiRequest } from './Request'
import states from '../../../Store/states'
import Notif from '../../Interfaces/Notif'
import { useCopy } from 'creeks'

/**
 * useAuth hook
 * 
 * @returns 
 */
export const useAuth = (): {
    authorized?: boolean
    isLoading: boolean,
    error?: Notif,
} => {

    /**
     * Is loading state
     * 
     */
    const [isLoading, setIsLoading] = useState(true)

    /**
     * Error state
     * 
     */
    const [error, setError] = useState<Notif>()

    /**
     * Authorized state
     * 
     */
    const [authorized, setAuthorized] = useState<boolean>()

    /**
     * On load
     * 
     */
    useEffect(() => apiRequest({
        api: 'user/auth',
        onSUCCESS: ({ body }) => `${setAuthorized(true)} ${states.auth.update(body.data)}`,
        onUNAUTHORIZED: () => `${setAuthorized(false)} ${states.auth.reset()}`,
        onERROR: ({ notif }) => setError(notif),
        onFinally: () => setIsLoading(false)
    }), [])

    return { isLoading, error, authorized }
}


/**
 * Auth Header
 * 
 * @returns 
 */
const AuthHeader = ({
    allowed,
    prohibited,
    loading,
    onError
}: {
    allowed: ReactNode
    prohibited: ReactNode
    loading?: ReactNode
    onError?: (message: string, status: string) => ReactNode
}) => {

    /**
     * Auth
     * 
     */
    const { isLoading, error, authorized } = useAuth()

    return <Fragment>
        {isLoading ? loading : (
            error ? (onError ? onError(error.message, error.status) : undefined) : (
                authorized === true ? allowed : prohibited
            )
        )}
    </Fragment>
}

export default AuthHeader;


/**
 * useRole hook
 * 
 * @returns 
 */
export const useRole = (roles: string[]): boolean => {

    /**
     * Auth state
     * 
     */
    const [auth] = useCopy(states.auth);

    return roles.includes(auth.role!);
}


/**
 * Role header
 * 
 * @returns 
 */
export const RoleHeader = ({ roles, allowed, prohibited }: {
    roles: string[],
    allowed: ReactNode
    prohibited: ReactNode
}) => {

    /**
     * Role
     * 
     */
    const role = useRole(roles)

    return role ? allowed : prohibited
}