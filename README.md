# Outline

1. shadcn/ui doc commands
2. clerk auth 
3. install zustand - state management lib


# Store Model

1. UI component: with shadcn, model.tsx and uses Dialog component and add it to ui folderS
2. Hooks: with zustand / not useContext,  use-store-model.tsx
3. Provider: with useEffect and useState - to insure the synchronization bw server and client
4. add provider to layout.tsx
5. use hook in children

## Store Model Form

1. UI component: with shadcn - Form and Input
2. define formSchema
3. useForm from react-hook-form