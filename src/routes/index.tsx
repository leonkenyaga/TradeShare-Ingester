import { createFileRoute } from '@tanstack/react-router'
import { MainModule } from '../Components/MainModule'

export const Route = createFileRoute('/')({
  component: MainModule
})