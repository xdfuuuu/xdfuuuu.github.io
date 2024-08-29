# Use the official NGINX image from the Docker Hub as the base image
FROM nginx:alpine

# Copy the html_folder contents to the default NGINX directory
COPY . /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX when the container is launched
CMD ["nginx", "-g", "daemon off;"]
