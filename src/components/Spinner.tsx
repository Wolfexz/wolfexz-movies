import { FaSpinner } from 'react-icons/fa';

export const Spinner = () => {
  return (
    <div className="w-full flex justify-center">
      <FaSpinner size="64" className="text-blue-500 animate-spin-slow" />
    </div>
  )
}
