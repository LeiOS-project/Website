/**
 * SEO Composable für einheitliche SEO-Einstellungen auf allen Seiten
 */
export function usePageSeo(options: {
    title: string
    description: string
    path?: string
    image?: string
    type?: 'website' | 'article'
}) {
    const baseUrl = 'https://leios.dev'
    const defaultImage = `${baseUrl}/og-image.png`
    
    const fullTitle = options.title.includes('LeiOS') 
        ? options.title 
        : `${options.title} | LeiOS`
    
    const url = options.path ? `${baseUrl}${options.path}` : baseUrl

    useSeoMeta({
        title: fullTitle,
        description: options.description,
        ogTitle: fullTitle,
        ogDescription: options.description,
        ogType: options.type || 'website',
        ogUrl: url,
        ogSiteName: 'LeiOS',
        ogLocale: 'en_US',
        ogImage: options.image || defaultImage,
        twitterCard: 'summary_large_image',
        twitterTitle: fullTitle,
        twitterDescription: options.description,
        twitterImage: options.image || defaultImage,
    })

    useHead({
        link: [
            { rel: 'canonical', href: url }
        ]
    })
}
