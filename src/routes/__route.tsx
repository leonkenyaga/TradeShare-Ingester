import { createFileRoute } from '@tanstack/react-router'
import { Link, createRootRoute, Outlet} from '@tanstack/react-router'
export const Route = createFileRoute('/__route')({
  component: () => <div>Hello /__route!</div>
})