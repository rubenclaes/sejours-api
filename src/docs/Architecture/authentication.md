# Authentication
## Server-based authentication
Before we can get into the discussion of how to secure an API we need to understand the application architecture behind the API itself a bit more.

Think about a classic, server-based authentication. Because the HTTP protocol is stateless there has to be a mechanism in place that allows the storage of user information, otherwise we would have to authenticate at each and every request that we make. User information is normally stored in a cookie and that information is being serialised/deserialised after each request.

There are multiple issues with server-based authentication, including, but not limited to scalability and complex session management.

## Token based authentication
When talking about token based authentication a token is generated which is also stateless. Once a valid token is available it can be attached to any HTTP request as part of the heading and the actual authentication process is now simple: each time the request is made a check needs to be done for the existence of a valid token.

## JWT
JWT (JSON Web Tokens - pronounced as 'jot') is an open standard that defines how information should be securely transmitted between two parties as a JSON object.

JWT tokens consist of three parts, separated by the dot (period). The sections are 'Header', 'Payload' and 'Signature'.