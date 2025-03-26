export const GET_INQUIRY_QUESTIONS = gql`
    query GetProductForWebsite($productId: ID!) {
        product(productId: $productId) {
            id
            name
            form{
                id
                questions{
                    id
                    label
                    key
                    inputType{
                        type
                    }
                    options{
                        id
                        label
                    }
                }
            }
        }
    }
`
