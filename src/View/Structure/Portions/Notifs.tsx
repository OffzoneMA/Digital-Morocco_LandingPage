import React from 'react';
import { useEffect } from 'react';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import actions from '../../../Store/actions';
import { useAction } from '../../../Controller/Tools/Helper/Action';

/**
 * Notifs 🔔
 * 
 * @returns 
 */
const Notifs = () => {

    /**
     * Create action
     * 
     */
    useAction(actions.notif, toast)

    /**
     * Toasts store
     * 
     */
    const { toasts } = useToasterStore();

    /**
     * Limit toasts
     * 
     */
    const TOAST_LIMIT = 3

    /**
     * On change toasts
     * 
     */
    useEffect(() => {
        toasts.filter((t, i) => t.visible && i >= TOAST_LIMIT && toast.dismiss(t.id))
    }, [toasts]);

    return <Toaster position='bottom-center' />
}

export default Notifs