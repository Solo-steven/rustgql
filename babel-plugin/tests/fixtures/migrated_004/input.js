const query = gql`
    query GetUser ($uuid: String = ${uuid}){
        name,
        age
    }
`;