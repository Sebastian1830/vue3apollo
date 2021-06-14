import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/global.scss";
import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloClients } from "@vue/apollo-composable";

// Apollo Client Config
const token = process.env.VUE_APP_GITHUB_ACCESS_TOKEN;

const additiveLink = from([
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));
    return forward(operation);
  }),
  new HttpLink({ uri: "https://api.github.com/graphql" }),
]);

const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache()
});

const app = createApp({
  setup() {
    provide(ApolloClients, { default: apolloClient })
  },
  render: () => h(App),
});

app.use(store).use(router).mount("#app");
