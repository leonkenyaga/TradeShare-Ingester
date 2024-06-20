import { createFileRoute } from '@tanstack/react-router'
import LinkAccountModule from '../../LinkAccountModule'

export const Route = createFileRoute('/AddAccount/')({
  component: LinkAccountModule
})