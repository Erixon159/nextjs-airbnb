import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
}

function FormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  disabled = false,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        disabled={disabled}
      />
    </div>
  )
}

export default FormInput
