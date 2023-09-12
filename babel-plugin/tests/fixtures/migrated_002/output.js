const uuid = "some-uuid";
const query = /* graphql */`query GetUser($uuid:String=${uuid}){name,age}`;