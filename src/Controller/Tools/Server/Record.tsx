import React, { useEffect, useRef, useState, ReactNode } from "react";
import { apiRequest } from "./Request";
import Form from "../Interface/Form";


/**
 * Api Record
 * 
 * @returns 
 */
export default function ApiRecord<Row extends Record<string, any> = Record<string, any>, Results extends Record<string, any> = Record<string, any>>({
    api,
    data,
    orders,
    children
}: {
    api: string,
    data?: Record<string, any>,
    orders?: Record<string, any>,
    children: (params: {
        Filter: ({ children }: { children: ReactNode }) => ReactNode,
        rows: Row[],
        results: Partial<Results>,
        properties: Partial<PropertiesResponse>,
        error: string | null,
        isLoading: boolean,
        hasEmpty: boolean,
        hasMore: boolean,
        isLoadingMore: boolean,
        showMore: () => void,
        refresh: () => void
    }) => JSX.Element
}) {

    // Mount ref
    const didMount = useRef(true);

    // Form data ref
    const formData = useRef<Record<string, string>>();

    // Data ref
    const dataRef = useRef(data);

    // Orders ref
    const ordersRef = useRef(orders);

    // Page ref
    const page = useRef(1);

    // Filter
    const filter = useRef(({ children }: { children: ReactNode }) => (
        <Form
            onLoad={formOnLoad}
            onSubmit={formOnSubmit}>
            {children}
        </Form>
    ));


    // Rows state
    const [rows, setRows] = useState<Row[]>([]);

    // Results state
    const [results, setResults] = useState<Partial<Results>>({});

    // Properties state
    const [properties, setProperties] = useState<Partial<PropertiesResponse>>({});

    // Error state
    const [error, setError] = useState<string | null>(null);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Loading more state
    const [loadingMore, setLoadingMore] = useState(false);


    /**
     * Request data method
     * 
     * @returns 
     */
    const requestData = (withResults: boolean = true) => ({
        ...formData.current,
        ...dataRef.current,
        orders: ordersRef.current,
        options: {
            results: withResults
        },
        page: page.current
    })

    /**
     * Update record method
     * 
     */
    const updateRecord = (data: RecordResponse<Row, Results>) => {

        // Update rows
        setRows(data.rows);

        // Update results
        setResults(data.results);

        // Update properties
        setProperties(data.properties);

        // Remove error
        setError(null);
        
        // Return page to 1
        page.current = 1;
    }

    /**
     * Append rows method
     * 
     */
    const appendRows = (data: RecordResponse<Row, Results>) => {

        setRows(old => [...old, ...data.rows]);
        setProperties(data.properties);
        setError(null);
    }

    /**
     * Record request method
     * 
     */
    const recordRequest = (append = false, byResults = true) => {

        // Return to page 1 and loading
        if (!append) {
            setLoading(true);
            page.current = 1;
        }

        else setLoadingMore(true);

        // Send request
        apiRequest<RecordResponse<Row, Results>>({
            api: api,
            data: requestData(byResults),
            onSUCCESS: ({ body }) => append ? appendRows(body.data) : updateRecord(body.data),
            onERROR: ({ body }) => setError(body.message),
            onUNAUTHORIZED: ({ body }) => setError(body.message),
            onINSUFFICIENT_ROLE: ({ body }) => setError(body.message),
            onFinally: () => `${setLoading(false)} ${setLoadingMore(false)}`
        })
    }

    /**
     * Form on load method
     * 
     * @param param0 
     * 
     * @returns 
     */
    const formOnLoad = ({ params }: any) => formData.current = params;

    /**
     * form on response method
     * 
     * @param param0 
     */
    const formOnSubmit = ({ params }: any) => {

        // Update form data
        formData.current = params;

        // Record request
        recordRequest();
    }

    /**
     * Show more method
     * 
     * @returns 
     */
    const showMore = () => {

        if (loadingMore) return;

        // Append page
        page.current = page.current + 1;

        recordRequest(true, false);
    }

    /**
     * On change default data
     * 
     */
    useEffect(() => {

        // Get record from api
        if (!didMount.current) {

            // Update default data
            dataRef.current = data;

            // Record request
            recordRequest();
        }


    }, [JSON.stringify(data)])


    /**
     * On change default orders
     * 
     */
    useEffect(() => {

        // Get record from api
        if (!didMount.current) {

            // Update default orders
            ordersRef.current = orders;

            // Record request
            recordRequest(false, false);
        }


    }, [JSON.stringify(orders)])


    /**
     * On change api
     * 
     */
    useEffect(() => {
        recordRequest();
        didMount.current = false;


    }, [api]);


    // Difine safe rows
    const safeRows = typeof rows === 'object' ? Object.values(rows) : [];

    // Filter

    // children callback
    return children({

        // Filter
        Filter: filter.current,

        // Rows
        rows: safeRows,

        // Results
        results: results,

        // Properties
        properties: properties,

        // Error
        error: error,

        // Loading
        isLoading: loading,

        // Has empty
        hasEmpty: !safeRows[0],

        // Show more
        showMore: showMore,

        // Has more
        hasMore: (properties.more ?? false) && !loading && !error,

        // Is loading more
        isLoadingMore: loadingMore,

        // Refresh
        refresh: () => recordRequest()
    })
}


/**
 * Record interface
 * 
 */
interface RecordResponse<Row, Results> {
    rows: Row[]
    results: Results
    properties: PropertiesResponse
}

/**
 * Properties interface
 * 
 */
interface PropertiesResponse {
    page: number
    more: boolean
    countFound: number
}