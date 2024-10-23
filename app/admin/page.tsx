import { Suspense } from 'react'

import ChartsContainer from '@/components/admin/ChartsContainer'
import StatsContainer from '@/components/admin/StatsContainer'

import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from '@/components/admin/Loading'

async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  )
}

export default AdminPage