# Step 1: Use the official, lightweight Nginx image based on Alpine Linux
FROM nginx:alpine

# Step 2: Remove the default Nginx placeholder files
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy your project files (index.html, style.css, script.js) into the Nginx web root
COPY . /usr/share/nginx/html

# Step 4: Expose port 80 so the container can accept standard HTTP web traffic
EXPOSE 80