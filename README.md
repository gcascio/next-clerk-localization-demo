This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First add the necessary env variables to `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=​pk_test_d2hvbGUtZmx5LTU4LmNsZXJrLmFjY291bnRzLmRldiQ​
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

CLERK_SECRET_KEY=​sk_test_••••••••••••••••••••••••••••••••••​
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


