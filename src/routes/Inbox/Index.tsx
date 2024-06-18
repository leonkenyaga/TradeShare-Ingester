import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Inbox/Index')({
  component: () => <div>Hello /Inbox/Index!</div>
})