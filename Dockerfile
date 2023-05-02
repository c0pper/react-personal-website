# ==== CONFIGURE =====
# Use a Node 16 base image
# FROM node:16-alpine 

# Set the working directory to /app inside the container
# WORKDIR /app

# Copy app files
# COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm install -g npm@8.5.0
# RUN npm install --silent

# Build the app
# RUN npm run build

# ==== RUN =======
# Set the env to "production".
# ENV NODE_ENV production

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
# EXPOSE 6300

# Start the app
# CMD [ "npx", "run", "dev" ]

FROM node:alpine
WORKDIR /app
COPY package.json .
RUN yarn
# copy all files
COPY . .
cmd ["yarn", "dev", "--debug"]