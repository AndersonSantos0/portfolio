import React from 'react'

interface EslintIConProps {
  color?: string
  size?: number
}

const EslinIcon: React.FC<EslintIConProps> = ({
  color = `#333`,
  size = 28
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 1.10714286}
    height={size}
    fill="none"
    viewBox="0 0 31 28"
  >
    <g fill={color} clipPath="url(#clip0)">
      <path d="M9.607 10.168l5.829-3.365a.472.472 0 01.471 0l5.829 3.365a.472.472 0 01.236.409v6.73c0 .168-.09.324-.236.408l-5.829 3.365a.472.472 0 01-.471 0l-5.829-3.365a.472.472 0 01-.235-.408v-6.73c0-.169.09-.325.235-.409" />
      <path d="M30.782 13.39L23.811 1.262C23.558.824 23.091.5 22.584.5H8.64c-.506 0-.974.324-1.228.762L.443 13.363a1.442 1.442 0 000 1.431l6.97 12.029c.254.438.722.662 1.228.662h13.943c.506 0 .974-.217 1.227-.656l6.971-12.048a1.368 1.368 0 000-1.391zm-5.772 5.832a.511.511 0 01-.262.432l-8.88 5.124a.506.506 0 01-.502 0l-8.887-5.123a.512.512 0 01-.263-.433V8.975a.51.51 0 01.261-.432l8.88-5.123a.504.504 0 01.502 0l8.887 5.123c.155.09.264.254.264.432v10.247z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H30.723V27H0z" transform="translate(.25 .5)" />
      </clipPath>
    </defs>
  </svg>
)

export default EslinIcon
