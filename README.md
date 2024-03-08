# Mobile Programming:
  - Calculator App

### Errors:
1. `Error: Exception in HostFunction: expected 0 arguments, got 1, js engine: hermes
   ERROR  Invariant Violation: "main" has not been registered. This can happen if:
Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
 A module failed to load due to an error and ``AppRegistry.registerComponent`` wasn't called., js engine: hermes
  `
    * Solution: 
      * yarn add @react-navigation/drawer@6.6.7
      * yarn add react-native-gesture-handler@2.15.0
      * yarn add react-native-reanimated@3.7.0
    ##### You can also use `npm`
2. `Unable to resolve "react-native-safe-area-context" from "node_modules\@react-navigation\stack\src\views\Header\Header.tsx"`
     * Solution:
         * yarn add react-native-safe-area-context
3. `React-Native-Reanimated: error: node_modules\react-native-reanimated\src\index.ts:`
      * Solution:
          * add this to 'babel.config.js' file:
            ^module.exports = function(api) {
                api.cache(true);
                return {
                  presets: ['babel-preset-expo'],
                  plugins: ['react-native-reanimated/plugin'],
                };
              };^
            and restart

