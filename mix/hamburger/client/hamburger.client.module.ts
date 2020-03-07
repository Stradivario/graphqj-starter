import { Module } from "@rxdi/core";

import { HamburgerComponent } from "./hamburger.component";
import { GraphqlModule } from "@rxdi/graphql-client";
import { GraphQLRequest } from "apollo-link";

@Module({
  imports: [
    GraphqlModule.forRoot(
      {
        async onRequest(this: GraphQLRequest) {
          const headers = new Headers();
          return headers;
        },
        pubsub: "ws://localhost:9000/subscriptions",
        uri: "http://localhost:9000/graphql"
      },
      {}
    )
  ],
  components: [HamburgerComponent]
})
export class HamburgerClientModule {}
