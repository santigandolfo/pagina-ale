/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for GitHub Pages.
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',
  
  /**
   * Set base path. This is the slug of your GitHub repository.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: '/pagina-ale',
  
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  
  /**
   * Disable trailing slash
   */
  trailingSlash: true,
  
  /**
   * Configure asset prefix for GitHub Pages
   */
  assetPrefix: '/pagina-ale',
}

module.exports = nextConfig
