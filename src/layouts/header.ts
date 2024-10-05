/* Header component extracted properties */
export interface HeaderProps {
    /* Specific header informations */
    header: {
        /* Blog/Guide/Manual entry */
        entry?: string | undefined,
        /* Page title */
        title: string | undefined,
        /* Should the title be displayed on the body up to the content */
        on_body?: boolean | undefined,
        /* Keywords for meta headers */
        keywords?: string | undefined,
        /* Dedicated meta image */
        image?: string | undefined
        /* Provided meta description */
        meta_descr?: string | undefined
    }
}
