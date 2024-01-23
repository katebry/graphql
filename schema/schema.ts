import {GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLSchema} from "graphql";
import axios from 'axios'

const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    }
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt},
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: { type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`).then((response) => response.data)
            }
        }
    }
})

export const schema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery
})