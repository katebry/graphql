import {GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLSchema} from "graphql";
import _ from 'lodash'

const users = [
    {id: '23', firstName: 'Kate', age: 29},
    {id: '31', firstName: 'Scout', age: 3}
]

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
                return _.find(users, {id: args.id})
            }
        }
    }
})

export const schema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery
})