import clsx from 'clsx'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  handleClick?: () => void
  isDisabled?: boolean
  isRound?: boolean
}

const Button = ({
  children,
  handleClick,
  isDisabled = false,
  isRound = false,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      type="button"
      className={clsx('main__button', isRound && 'main__button-round')}
      disabled={isDisabled}
      onClick={handleClick}
      whileHover={{ scale: !isDisabled ? 1.035 : 1 }}
      whileTap={{ scale: !isDisabled ? 0.985 : 1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
