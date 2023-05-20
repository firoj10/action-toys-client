import { useEffect } from "react";


const Blog = () => {
    useEffect(()=>{
        document.title = " | Blog"
    })
    return (
        <div>
           
            <h2 className="font-semibold 	text-2xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <p>The access token allows for access to different APIs and protected resources. The refresh token lets you mint new access tokens. The id token from OpenID Connect (OIDC)
             is used by the client to display information about the user
             As the name may suggest, an ID token is an artifact that client applications can use to consume the identity of a user. For example, the ID token can contain information about the name, email, and profile picture of a user</p>
        
        
        <h2 className="font-semibold 	text-2xl">Compare SQL and NoSQL databases?</h2>
        
        
        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions,
             while NoSQL is better for unstructured data like documents or JSON</p>
        
        
        
        <h2 className="font-semibold 	text-2xl">What is express js? What is Nest JS</h2>
        <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
        
        
        <h2 className="font-semibold 	text-2xl">What is MongoDB aggregate and how does it work</h2>
        <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</p>
        
        
        </div>
    );
};

export default Blog;