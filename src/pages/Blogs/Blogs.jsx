import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="w-4/5 mx-auto my-20 space-y-5">
            <div className="card full bg-red-500 text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>
                        <span className="text-slate-800">Access Token:</span> A credential for accessing protected resources.<br></br>
                        <span className="text-slate-800">Refresh Token:</span> A credential for obtaining new access tokens without reauthentication.</p>
                        <p className="text-lg font-bold text-slate-800">Access Token:</p>
                        <ul>
                            <li>Stored in memory on the client-side during the session.</li>
                            <li>Used to authenticate and authorize API requests.</li>
                            <li>Short-lived and expires after a certain period.</li>
                        </ul>
                        <p className="text-lg font-bold text-slate-800">Refresh Token:</p>
                        <ul>
                            <li>Stored securely on the client-side (e.g., HTTP-only cookie).</li>
                            <li>Used to obtain a new access token without reauthentication.</li>
                            <li>Longer-lived compared to access tokens.</li>
                        </ul>
                        <p className="text-lg font-bold text-slate-800">Storage on Client-side:</p>
                        <ul>
                            <li>Access tokens: Stored in memory or application state during the session.</li>
                            <li>Refresh tokens: Stored securely (e.g., HTTP-only cookie) to prevent unauthorized access.</li>
                        </ul>
                </div>
            </div>
            <div className="card full bg-red-500 text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">
Compare SQL and NoSQL databases?</h2>
                        <p className="text-lg font-bold text-slate-800">SQL Databases:</p>
                        <ul>
                            <li>Structured, tabular model</li>
                            <li>ACID properties for data consistency</li>
                            <li>Examples: MySQL, PostgreSQL</li>
                        </ul>
                        <p className="text-lg font-bold text-slate-800">NoSQL Databases:</p>
                        <ul>
                            <li>Flexible, schema-less data model</li>
                            <li>Eventual consistency</li>
                            <li>Examples: MongoDB, Cassandra</li>
                        </ul>
                        
                </div>
            </div>
            <div className="card full bg-red-500 text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                        <p className="text-lg font-bold text-slate-800">
Express.js</p>
                        <p>Express.js is a fast and minimalist web application framework for Node.js. It simplifies web application development by providing features for routing, handling HTTP requests, and implementing middleware functions.</p>
                        <p className="text-lg font-bold text-slate-800">Nest JS:</p>
                        <p>NestJS is a TypeScript-based web application framework for Node.js. It provides a structured and scalable approach to building server-side applications, with a focus on modularity and TypeScript support.</p>
                        
                </div>
            </div>
            <div className="card full bg-red-500 text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
                    <p>MongoDB's aggregate is a powerful feature that allows for advanced data aggregation and processing operations on the data stored in a MongoDB database. It provides a way to perform complex data transformations and computations within the database itself, reducing the need for multiple round trips to the application layer.</p>
                    <p>The aggregate pipeline in MongoDB consists of multiple stages, each performing a specific operation on the input data and passing the results to the next stage. Each stage can include operations like filtering, grouping, sorting, projecting, joining, and more.</p>
                    <p>The pipeline stages are executed in sequence, with the output of one stage serving as the input for the next stage. This allows for the creation of intricate data processing workflows, enabling tasks like data aggregation, analytics, and generating custom reports directly in the database.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;