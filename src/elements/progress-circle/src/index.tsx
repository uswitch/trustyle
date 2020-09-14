/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'

const ProgressCircle = () => {
  const { theme }: any = useThemeUI()
  const innerCircleStroke =
    get(theme, 'elements.progress-circle.inner-circle')?.stroke || '#f2f2f2'
  const pathFill = get(theme, 'elements.progress-circle.path')?.fill || '#000'

  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="48"
        cy="48"
        r="40"
        strokeWidth="16"
        sx={{ stroke: innerCircleStroke }}
      />
      <path
        d="M49 79C44.5817 79 41 82.5817 41 87C41 91.4183 44.5817 95 49 95L49 79ZM76.5772 75.4307L82.2699 81.0514L82.2699 81.0514L76.5772 75.4307ZM85.0313 62.616L92.436 65.6443L92.436 65.6443L85.0313 62.616ZM85.0313 32.384L77.6266 35.4123L85.0313 32.384ZM76.5772 19.5693L70.8844 25.19L76.5772 19.5693ZM63.9247 11.0068L67.0195 3.62965L63.9247 11.0068ZM49 95C55.1864 95 61.3097 93.7658 67.0195 91.3704L60.8298 76.6161C57.0762 78.1909 53.0567 79 49 79L49 95ZM67.0195 91.3704C72.7291 88.975 77.9103 85.467 82.2699 81.0514L70.8844 69.81C68.0011 72.7303 64.5836 75.0413 60.8298 76.6161L67.0195 91.3704ZM82.2699 81.0514C86.6294 76.6361 90.0821 71.3999 92.436 65.6443L77.6266 59.5877C76.0606 63.4168 73.7679 66.8895 70.8844 69.81L82.2699 81.0514ZM92.436 65.6443C94.7898 59.8889 96 53.7237 96 47.5L80 47.5C80 51.6507 79.1927 55.7584 77.6266 59.5877L92.436 65.6443ZM96 47.5C96 41.2762 94.7898 35.1111 92.436 29.3557L77.6266 35.4123C79.1927 39.2416 80 43.3493 80 47.5L96 47.5ZM92.436 29.3557C90.0821 23.6001 86.6294 18.3639 82.2699 13.9486L70.8844 25.19C73.7679 28.1105 76.0606 31.5832 77.6266 35.4123L92.436 29.3557ZM82.2699 13.9486C77.9103 9.53304 72.7291 6.02495 67.0195 3.62965L60.8298 18.3839C64.5836 19.9587 68.0011 22.2697 70.8844 25.19L82.2699 13.9486ZM67.0195 3.62965C61.3097 1.23425 55.1864 -1.43433e-06 49 -1.70474e-06L49 16C53.0567 16 57.0762 16.8091 60.8298 18.3839L67.0195 3.62965Z"
        sx={{ fill: pathFill }}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 48 48"
          to="360 48 48"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default ProgressCircle