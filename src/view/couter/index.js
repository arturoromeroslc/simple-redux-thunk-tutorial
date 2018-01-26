import { connect } from 'react-redux'
import counterActions from '../../state/counter/actions'
import Counter from './component'

export default connect(
  state => ({ number: state.number}),
  counterActions
)(Counter)
