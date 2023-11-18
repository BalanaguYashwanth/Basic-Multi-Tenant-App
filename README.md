Multi-tenant app build using [Next.js](https://nextjs.org/)

## Prerequisite

| Prerequisite | Version          |
| ------------ | ---------------- |
| Node         | Latest (v21.2.0) |
| NPM          | Latest (v10.2.3) |
| Typescript   | Latest (v4.8.3)  |
| Eslint       | Latest (v8.50.0) |

## Getting Started

First, Install:

```bash
  npm install
```

Copy the contents from `env.template` file to `.env.local`

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sub domains

- Home - [localhost:3000](http://localhost:3000)
- Developers - [developers.localhost:3000](http://developers.localhost:3000)
- Admin - [admin.localhost:3000](http://admin.localhost:3000)

## File Structure

    .
    ├── app
    ├── [Domain]
        ├── page.tsx
    ├── Common
        ├── constants
        ├── model
        ├── types
        ├── components
            ├── Button
            ├── Dynamic Template
            ├── Header
            └── ...
    ├── middleware
    ├── env.template

### Component Structure 

        ├── Button
            ├── tests
                ├── Button.test.js
        ├── index.js
        ├── Button.module.scss


## Design Structure

- Follows subdomain based routing logic using Next.js routing features

- Routing logic implemented in middleware

- Based on the routing logic, it gets redirect to page file where single component will be the landing page for all subdomains.

- Color Schema, Content, Image and more can easily customizable using json based single component

- Implemented the unit test cases that make sure code will get well maintainable

- Follows proper naming convention, modularization and clean code practices

## Learn more

- We can also implement single tenancy architecture in multi tenancy app where each tenant in multi tenancy has seperate build and serperate server

- Othercase multi tenancy architecture directly can implement in multi tenancy app where each tenant will be sharing the same build and same server with other tenant and these tenants divided based on the routing logic

- Each architecture has their pros and cons based on requirements, proper decision should be taken care for code and app saclability

![alt single tenancy vs multi tenancy](https://firebasestorage.googleapis.com/v0/b/alarm-a709f.appspot.com/o/singlevsmulti.png?alt=media&token=eb473244-f99b-47fd-8f08-6b85604c476c)

![alt design](https://firebasestorage.googleapis.com/v0/b/alarm-a709f.appspot.com/o/design-multi-tenancy.png?alt=media&token=57ac0770-cb17-4f84-b9f9-227ce403aadb)
