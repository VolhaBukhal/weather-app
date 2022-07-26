import { CSSProperties } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  color: 'green',
}

export const Loader = () => (
  <div>
    <ClipLoader cssOverride={override} color="#ffffff" />
  </div>
)
