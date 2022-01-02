declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_API_URL: string
        REACT_APP_API_ZEUS_URL: string
        REACT_APP_KEY_TOKEN: string
        REACT_PLATFORM: string
        REACT_URL: string
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export { }