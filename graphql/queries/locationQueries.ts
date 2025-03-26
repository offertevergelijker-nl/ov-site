export const GET_COUNTRIES_AND_PROVINCES = gql`
    query GetCountriesAndProvincesForWebsite {
        countries {
            id
            label
            code
            provinces{
                id
                countryId
                label
            }
        }
    }
`
