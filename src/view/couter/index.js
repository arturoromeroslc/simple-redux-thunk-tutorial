import { connect } from 'react-redux'
import Counter from './component'

const mapStateToProps = state => ({
  number: state.number
})

export default connect(
  mapStateToProps
)(Counter)
