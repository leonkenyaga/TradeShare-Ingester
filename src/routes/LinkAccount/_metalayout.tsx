import { createFileRoute } from '@tanstack/react-router'
import LinkAccountModule from '../../Components/LinkAccount/LinkAccountModule'

export const Route = createFileRoute('/LinkAccount/_metalayout')({
  component: LinkAccountModule
})