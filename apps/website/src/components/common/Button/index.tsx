import { type ReactNode, forwardRef } from 'react'

type ButtonVariantTypes = 'primary' | 'secondary' | 'special'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  variant?: ButtonVariantTypes
}

const renderClassVariants = (variant: ButtonVariantTypes) => {
  if (variant === 'primary') return 'bg-white border-white hover:bg-gray-200'
  if (variant === 'secondary') return 'bg-transparent text-white border-white hover:bg-white hover:text-black'
  if (variant === 'special') return 'bg-black text-white hover:bg-transparent'
  else return ''
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size, icon, iconPosition, children, ...props }, ref) => {
    if (variant === 'special') {
      return (
        <div className='rounded-sm w-auto h-min mx-auto mt-10 bg-gradient-to-r p-1 from-[#3B82F6] to-[#9333EA] shadow-[0px_0px_20px_5px_rgba(100,100,100,0.5)]'>
          <button
            {...props}
            ref={ref}
            className={`flex justify-center items-center w-full px-6 py-2 font-medium rounded-sm border border-transparent 
            ${ renderClassVariants(variant) } ${ className }`}
          >
            { ((iconPosition === 'left' || !iconPosition) && icon) && icon }
            { children }
            { (iconPosition === 'right' && icon) && icon }
          </button>
        </div>
      )
    }

    return (
      <button
        className={`flex justify-center items-center w-full px-6 py-2 font-medium rounded-sm border border-transparent 
        ${ renderClassVariants(variant) } ${ className }`}
        ref={ref}
        {...props}
      >
       { ((iconPosition === 'left' || !iconPosition) && icon) && icon }
       { children }
       { (iconPosition === 'right' && icon) && icon }
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
