import { FunctionComponent } from 'react'
import { DefaultLayout } from '../layouts/Default'
import { useParams } from 'react-router-dom'

export const BuildPage: FunctionComponent = (props) => {
  const params = useParams<{ buildId: string }>()

  return <DefaultLayout>BuildPage {params.buildId}</DefaultLayout>
}
