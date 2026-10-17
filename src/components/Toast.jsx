import { CheckIcon } from './Icons'

export default function Toast({ show, message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4 transition-all duration-300 ease-out-expo ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
    >
      {show && (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/95 px-4 py-2.5 text-sm text-fg shadow-2xl shadow-black/50 backdrop-blur">
          <CheckIcon className="size-4 text-success" />
          {message}
        </span>
      )}
    </div>
  )
}
