export const GET_PRODUCT = gql`
    query GetProduct($productSlug: String!) {
        productBySlug(productSlug: $productSlug) {
            id
            usps {
                id
                value
                index
            }
            image
        }
    }
`;