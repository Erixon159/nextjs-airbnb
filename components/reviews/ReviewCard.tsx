import Link from 'next/link'
import Image from 'next/image'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Rating from './Rating'
import Comment from './Comment'

type ReviewCardProps = {
  reviewInfo: {
    comment: string
    rating: number
    propertyId?: string
    name: string
    image: string
  }
  children?: React.ReactNode
}

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  let ImageElement = (
    <Image
      src={reviewInfo.image}
      alt="profile"
      width={100}
      height={100}
      className="w-12 h-12 rounded-full object-cover"
    />
  )
  let NameElement = (
    <h3 className="text-sm font-bold capitalize mb-1">{reviewInfo.name}</h3>
  )

  if (reviewInfo.propertyId) {
    ImageElement = (
      <Link href={`/properties/${reviewInfo.propertyId}`}>{ImageElement}</Link>
    )
    NameElement = (
      <Link href={`/properties/${reviewInfo.propertyId}`}>{NameElement}</Link>
    )
  }

  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          {ImageElement}
          <div className="ml-4">
            {NameElement}
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      {/* delete button later */}
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  )
}

export default ReviewCard
