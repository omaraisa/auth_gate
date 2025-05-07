FROM node:22-alpine

# Declare build arguments
ARG NEXT_PUBLIC_ArcGISAPIKey
ARG NEXT_PUBLIC_PORTAL_URL
ARG NEXT_PUBLIC_PORTAL_TOKEN_SERVICE_URL
ARG NEXT_PUBLIC_GEOPORTAL_URL
ARG NEXT_PUBLIC_GUEST_USERNAME
ARG NEXT_PUBLIC_GUEST_PASSWORD

# Set the working directory
WORKDIR /auth_gate

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Set environment variables using build arguments
ENV NEXT_PUBLIC_ArcGISAPIKey=$NEXT_PUBLIC_ArcGISAPIKey
ENV NEXT_PUBLIC_PORTAL_URL=$NEXT_PUBLIC_PORTAL_URL
ENV NEXT_PUBLIC_PORTAL_TOKEN_SERVICE_URL=$NEXT_PUBLIC_PORTAL_TOKEN_SERVICE_URL
ENV NEXT_PUBLIC_GEOPORTAL_URL=$NEXT_PUBLIC_GEOPORTAL_URL
ENV NEXT_PUBLIC_GUEST_USERNAME=$NEXT_PUBLIC_GUEST_USERNAME
ENV NEXT_PUBLIC_GUEST_PASSWORD=$NEXT_PUBLIC_GUEST_PASSWORD

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3101

# Start the application
CMD ["npm", "start"]