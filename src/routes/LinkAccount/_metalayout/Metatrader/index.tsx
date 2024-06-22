import { createFileRoute } from '@tanstack/react-router'
import "../../../../App.css"
import ConfigureMetatrader from '../../../../Components/LinkAccount/ConfigureMetatrader/ConfigureMetatrader'

export const Route = createFileRoute('/LinkAccount/_metalayout/Metatrader/')({
  component: ConfigureMetatrader
})


