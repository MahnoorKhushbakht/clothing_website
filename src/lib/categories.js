
export async function getCategoriesId(slug) {
    const categoryResponse = await fetch(`http://localhost/mens-clothing/wp-json/wp/v2/categories?slug=${slug}`);
    const categories = await categoryResponse.json();
    const { id } = categories[0]; 
    return id;
}

export async function getCategories(slug) {
    const categoryId = await getCategoriesId(slug);
    const postsResponse = await fetch(`http://localhost/mens-clothing/wp-json/wp/v2/posts?categories=${categoryId}`);
    const posts = await postsResponse.json();
    return posts;
}

export async function getPosts(slug) {
    const postsResponse = await fetch(`http://localhost/mens-clothing/wp-json/wp/v2/posts?slug=${slug}`);
    const posts = await postsResponse.json();
    return posts;
}

// { cache: 'no-store' }