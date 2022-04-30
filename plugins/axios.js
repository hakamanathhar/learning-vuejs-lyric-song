export default ({ $axios, env }) => {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `Bearers ${env.VUE_APP_GENIUSKEY}`;
  });
}
