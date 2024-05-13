
export async function getCategoriesId(slug) {
    const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL_WP}categories?slug=${slug}`,
    { next: { revalidate: 36 } });
    const categories = await categoryResponse.json();
    const { id } = categories[0]; 
    return id;
}

export async function getCategories(slug) {
    const categoryId = await getCategoriesId(slug);
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL_WP}posts?categories=${categoryId}`,
    { next: { revalidate: 36 } });
    const posts = await postsResponse.json();
    return posts;
}

export async function getPosts(slug) {
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL_WP}posts?slug=${slug}`,
    { next: { revalidate: 36 } });
    const posts = await postsResponse.json();
    return posts;
}

export async function getSlugs() {
    const postsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL_WP}posts`,
    { next: { revalidate: 36 } });
    const posts = await postsResponse.json();
    return posts.map((post) => post.slug);
}

export async function getComments(slug) {
    console.log('slug',slug)
    const postsResponse = await fetch('http://localhost:3000/api/posts', { next: { revalidate: 10 } });
    const posts = await postsResponse.json();
    const filteredPosts = posts.data.filter(post => post.slug === slug);

    return filteredPosts;
}
// { cache: 'no-store' }

// const slug = parts[1].trim().replace(/^"(.*)"$/, '$1');