import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { GraphQLFactory, GraphQLModule } from "@nestjs/graphql";
import { EmailModule } from "../src/email.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EmailModule,
    GraphQLModule,
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly graphqlFactory: GraphQLFactory) {}
  configure(consumer: MiddlewareConsumer) {
    const schema = this.createSchema();
    consumer.apply(graphiqlExpress({endpointURL: "/graphql"}))
      .forRoutes("/graphiql")
      .apply(graphqlExpress(req => ({schema, rootValue: req})))
      .forRoutes("/graphql");
  }
  createSchema() {
    const typeDefs = this.graphqlFactory.mergeTypesByPaths("./src/**/*.types.graphql");
    const schema = this.graphqlFactory.createSchema({typeDefs
    });
    return schema;
  }
}
