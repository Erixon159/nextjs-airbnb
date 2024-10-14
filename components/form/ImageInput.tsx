import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function ImageInput() {
  const name = 'image'

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
        className="max-w-xs"
        style={{ paddingTop: '5.5px' }}
      />
    </div>
  )
}

export default ImageInput
