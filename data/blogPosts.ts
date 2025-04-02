export interface BlogPost {
    id: number;
    image: string;
    title: string;
    content: string;
    link: string;
    createdAt: Date;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: 'assets/home/photo_1.jpeg',
        title: 'Web Development with Nuxt 3',
        content: 'In this article, we explore the latest features of Nuxt 3 and how it enhances the Vue.js development experience. Learn about the new Composition API, auto-imports, and improved performance metrics.',
        link: '/blog/modern-web-development-nuxt-3',
        createdAt: new Date('2025-02-15')
    },
    {
        id: 2,
        image: 'assets/home/photo_1.jpeg',
        title: 'Advanced Tailwind CSS Techniques',
        content: 'Discover powerful Tailwind CSS techniques to streamline your workflow. This post covers custom configurations, responsive design strategies, and advanced utility combinations for clean and maintainable code.',
        link: '/blog/advanced-tailwind-css-techniques',
        createdAt: new Date('2025-01-28')
    },
    {
        id: 3,
        image: 'assets/home/photo_1.jpeg',
        title: 'Building Robust APIs with Laravel',
        content: 'Learn how to create scalable and secure APIs using Laravel. We cover resource controllers, API authentication, rate limiting, and best practices for structuring your API endpoints.',
        link: '/blog/building-robust-apis-with-laravel',
        createdAt: new Date('2025-01-10')
    },
    {
        id: 4,
        image: 'assets/home/photo_1.jpeg',
        title: 'TypeScript Best Practices for Vue 3',
        content: 'Improve your Vue 3 applications with TypeScript. This article explains how to properly type components, composables, and store state while avoiding common pitfalls and maximizing type safety.',
        link: '/blog/typescript-best-practices-vue-3',
        createdAt: new Date('2024-12-05')
    },
    {
        id: 5,
        image: 'assets/home/photo_1.jpeg',
        title: 'Full-Stack Development with Laravel and Vue',
        content: 'A comprehensive guide to building full-stack applications using Laravel and Vue.js. Learn about Inertia.js, data fetching strategies, and state management patterns that work well across the stack.',
        link: '/blog/full-stack-development-laravel-vue',
        createdAt: new Date('2024-11-22')
    },
    {
        id: 6,
        image: 'assets/home/photo_1.jpeg',
        title: 'Web Performance Optimization Techniques',
        content: 'Discover practical strategies to improve your web application performance. This post covers image optimization, code splitting, lazy loading, and measuring performance with Core Web Vitals.',
        link: '/blog/web-performance-optimization-techniques',
        createdAt: new Date('2024-10-30')
    }
];

// You can use this as a mock database or import it in your components
export default blogPosts;