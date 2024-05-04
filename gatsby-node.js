const fetch = require('node-fetch');

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;

    let baseUrl = "https://picsum.photos/v2/list?limit=100";
  
    let requestUrl = `${baseUrl}`;
  
    console.log(requestUrl);

let responseData = {}
        let response = await fetch(requestUrl);
        responseData = await response.json();

    
console.log(responseData)


     responseData?.forEach((pic) => {
        console.log("data: " + pic),
        createNode({
        ...pic,
        id: createNodeId(pic.id), 
        parent: null,
        children: [],
        internal: {
            type: 'Pictures',   
            contentDigest: createContentDigest(pic),
        },
        })
    })
}