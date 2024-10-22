import { fetchFavorites } from '@/utils/actions'

import EmptyList from '@/components/home/EmptyList'
import PropertiesList from '@/components/home/PropertiesList'

async function FavoritesPage({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  const favorites = await fetchFavorites(searchParams)

  if (favorites.length === 0) {
    return <EmptyList />
  }

  return <PropertiesList properties={favorites} />
}

export default FavoritesPage
