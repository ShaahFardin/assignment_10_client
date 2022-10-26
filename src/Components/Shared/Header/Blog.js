import React from "react";

const Blog = () => {
  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <h4>what is cors?</h4>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins other than its own from
          which a browser should permit loading resources. CORS also relies on a
          mechanism by which browsers make a "preflight" request to the server
          hosting the cross-origin resource, in order to check that the server
          will permit the actual request. In that preflight, the browser sends
          headers that indicate the HTTP method and headers that will be used in
          the actual request
        </p>
        <h4>
          Why are we using firebase? What are the alternatives of firebase?
        </h4>
        <p>
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together. <h5>Alternatives of firebase:</h5>
          Competitors and Alternatives to Firebase :<li>MongoDB</li>
          <li>Oracle Database</li>
          <li>Oracle Database</li>
          <li>Amazon redshift</li>
          <li>Couchbase Server</li>
        </p>
        <h4>How does the private route work?</h4>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <h4>What is Node? How does Node work?</h4>
      <p>
        It is a used as backend service where javascript works on the
        server-side of the application. This way javascript is used on both
        frontend and backend. Node. js runs on chrome v8 engine which converts
        javascript code into machine code, it is highly scalable, lightweight,
        fast, and data-intensive
      </p>
    </div>
  );
};

export default Blog;
