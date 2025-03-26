export const CREATE_INQUIRY = gql`
    mutation StoreProductFromWebsite($productId: ID!, $input: InquiryCreateInput!) {
        inquiryCreate(productId: $productId, input: $input)
    }
`
