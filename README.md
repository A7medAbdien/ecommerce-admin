# Outline

1. shadcn/ui doc commands
2. clerk auth 
3. install zustand - state management lib


# Store Model

1. UI component: with shadcn, model.tsx and uses Dialog component and add it to ui folderS
2. Hooks: with zustand / not useContext,  use-store-model.tsx
3. Provider: with useEffect and useState - to insure the synchronization bw server and client
4. add  ModalProvider to layout.tsx - to make all modal globally accessible
5. use hook in children

## Store Model Form

1. UI component: with shadcn - Form and Input
2. define formSchema
3. useForm from react-hook-form
4. onSubmit

# prisma

1. npm i -D prisma
2. npm i @prisma/client
3. npx prisma init
4. add key to .env
5. create model in shcema.prisma
6. npx prisma generate
7. npx prisma db push

# api

1. api/stores/route.ts - post function
2. store-model - loading state
3. npm i axios - used based on post file location
4. npm i react-hot-toast - create a ToastProvider

# Auth users must have a store
1. check if user has any stores else go to sign-in
2. redirect with the first store found id

# Reset Prisma

1. `npx prisma migrate reset`
2. `npx prisma generate`
3. `npx prisma db push`

# all installs

## shadcn

* npx shadcn-ui@latest add popover
* npx shadcn-ui@latest add command
* npx shadcn-ui@latest add separator

