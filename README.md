# wellcomecollection.org

The new home of the betanextbest.wellcomecollection.org website.

# client

    cd client
    npm install
    npm run compile:watch
       
# server
    
    cd server
    npm run watch
    
The assets are then compiled to the root `/dist` directory which is then referenced by the server
app via koa-static.
