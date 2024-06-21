import { createFileRoute } from '@tanstack/react-router'
import LinkAccountModule from '../../Components/LinkAccountModule'

export const Route = createFileRoute('/AddAccount/')({
  component: LinkAccountModule
})