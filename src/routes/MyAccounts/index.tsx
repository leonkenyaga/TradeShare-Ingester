import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/MyAccounts/')({
  component: () => <div className="ml:400 mt: 500">Hello /MyAccounts/!</div>
})