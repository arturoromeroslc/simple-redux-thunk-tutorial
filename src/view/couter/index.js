import { connect } from 'react-redux'
import Counter from './component'

const mapStateToProps = state => ({
  current: state.current
})

export default connect(
  mapStateToProps
)(Counter)
