const fetch = require('node-fetch');

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;

    let baseUrl = "https://picsum.photos/v2/list?limit=100";
  
    // let requestParams = {
    //   league: 1,
    //   season: 2023
    // }
  
    // let params = new URLSearchParams(requestParams);
    // let queryString = params.toString();
  
    let requestUrl = `${baseUrl}`;
  
    console.log(requestUrl);

//   const headers = new Headers(meta);
//     const fetchOptions = {
//         "headers": headers
//     }
let responseData = {}
        let response = await fetch(requestUrl);
        responseData = await response.json();

    
console.log(responseData)


     responseData?.forEach((pic) => {
        console.log("data: " + pic),
        createNode({
        ...pic,
        id: createNodeId(pic.id), //[ pass a unique identifier here: [movie.id] for example
        parent: null,
        children: [],
        internal: {
            type: 'Pictures',   // name of collection in graphql schema
            contentDigest: createContentDigest(pic),
        },
        })
    })
}