import { createFileRoute } from '@tanstack/react-router'
import { MainModule } from '../MainModule'

export const Route = createFileRoute('/')({
  component: MainModule
})