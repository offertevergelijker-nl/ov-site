export default defineEventHandler(async (event) => {
    const {slug} = event.context.params;
    return await $fetch(`http://localhost:3002/api/product/${slug}`);
});